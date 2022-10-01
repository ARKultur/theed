import './style.css';
import m from 'mithril';

import HomeView from './views/Home';
import LandingView from './views/LandingView';

m.route(
    document.body,
    '/', {
    '/': LandingView,
    '/home': HomeView,
    // '/login': LoginView,
},
);

