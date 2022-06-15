import './style.css';
import m from 'mithril';

import HomeView from './views/Home';

m.route(
    document.body,
    '/', {
      '/': HomeView,
      // '/login': LoginView,
    },
);

