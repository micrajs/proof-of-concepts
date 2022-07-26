import * as HomePage from './HomePage';
import * as AboutPage from './AboutPage';
import * as HomePageMain from './HomePage/nested/HomePageMain';
import * as HomePageAside from './HomePage/nested/HomePageAside';

const router = use('router');

router.page('/about').view(AboutPage.View);
router
  .page('/', HomePage.handler)
  .view(HomePage.View)
  .nested((outlets) => {
    outlets
      .page('(.*)', HomePageMain.handler)
      .view(HomePageMain.View)
      .loading(HomePageMain.Loading)
      .name('home.main');

    outlets.page('(.*)').view(HomePageAside.View).name('home.aside');
  });
