import './style.css';
import m from 'mithril';

import HomeView from './views/Home';

m.route(
    document.body,
    '/', {
      '/': LandingView,
      '/home': HomeView,
      // '/login': LoginView,
    },
);

