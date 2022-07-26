import {Document} from './experience/components/Document';

export const AppServiceProvider: Micra.ServiceProvider = {
  async boot({container}) {
    container.use('ui-engine').setRoot(Document);

    await import('@/routes/pages');
  },
};
