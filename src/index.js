import './style.css';
import m from 'mithril';

import HomeView from './views/Home';
import LandingView from './views/LandingView';
import LoginView from './views/LoginView';

m.route(
    document.body,
    '/', {
    '/': LandingView,
    '/home': HomeView,
    '/login': LoginView,
},
);

