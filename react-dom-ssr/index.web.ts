import app from '@micra/application';
import {SPAKernel} from '@micra/spa-kernel';
import {RouterServiceProvider} from '@micra/router/ServiceProvider';
import {SPARouterServiceProvider} from '@micra/spa-router/ServiceProvider.web';
import {UIServiceProvider} from '@micra/react-dom-ui-engine/ServiceProvider.web';
import {AppServiceProvider} from '@/domains/index.web';

export const handler = app.run({
  kernel: SPAKernel,

  providers: {
    UIServiceProvider,
    RouterServiceProvider,
    SPARouterServiceProvider,
    AppServiceProvider,
  },
});
