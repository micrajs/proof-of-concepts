import {json} from '@micra/request-handler/utilities';

const router = use('router');

router.get('/api', async () => {
  return json({
    message: 'Hello, Micra with extension!',
  });
});
