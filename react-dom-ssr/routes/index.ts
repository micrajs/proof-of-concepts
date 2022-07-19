import * as HomePage from './pages/HomePage';
import * as AboutPage from './pages/AboutPage';
import * as HomePageMain from './pages/HomePage/nested/HomePageMain';
import * as HomePageAside from './pages/HomePage/nested/HomePageAside';

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
