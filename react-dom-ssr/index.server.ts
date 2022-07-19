import app from '@micra/application';
import {ExpressKernelConfig} from '@/app/kernel/config.server';
import {ViteExpressKernel} from '@/app/kernel/data/classes/ViteExpressKernel';
import {RESTRouterServiceProvider} from '@micra/rest-router/ServiceProvider';
import {AppServiceProvider} from '@/domains/index.server';
import {UIServiceProvider} from '@micra/react-dom-ui-engine/ServiceProvider.server';
import {RouterServiceProvider} from '@micra/router/ServiceProvider';
import {SPARouterServiceProvider} from '@micra/spa-router/ServiceProvider.server';

export const handler = app.run({
  kernel: ViteExpressKernel,

  configurations: {
    'server-kernel': ExpressKernelConfig,
  },

  providers: {
    UIServiceProvider,
    RouterServiceProvider,
    RESTRouterServiceProvider,
    SPARouterServiceProvider,
    AppServiceProvider,
  },
});
