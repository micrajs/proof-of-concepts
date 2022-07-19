import {ExpressKernel} from '@micra/express-kernel';
import {html, isHtml} from '@micra/request-handler/utilities';
import {resolve} from 'path';
import {createServer as createViteServer} from 'vite';

export class ViteExpressKernel extends ExpressKernel {
  async boot(application: Micra.Application) {
    const vite = await createViteServer({
      root: process.cwd(),
      configFile: resolve(process.cwd(), '.viterc.ts'),
      server: {
        middlewareMode: true,
        hmr: {
          protocol: 'ws',
          host: 'localhost',
        },
      },
    });

    this.express.disable('x-powered-by').use(vite.middlewares);

    if (process.env.NODE_ENV === 'development') {
      const router = application.container.use('router');
      const viteTransformHtml: Micra.Middleware =
        async function viteTransformHtml({request}, next) {
          const response = await next();
          if (response && isHtml(response)) {
            const body = await response.text();
            const transformed = await vite.transformIndexHtml(
              request.url,
              body,
            );

            return html(transformed, response);
          }

          return response;
        };

      router.middlewares(viteTransformHtml);
    }

    return await super.boot(application);
  }
}
