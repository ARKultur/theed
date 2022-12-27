import './style.css';
import m from 'mithril';

import HomeView from './views/Home';
import LandingView from './views/LandingView';
import LoginView from './views/LoginView';
import MapBoxView from './views/MapBoxView';
import AddNodeView from './views/AddNodeView';
import DelNodeView from './views/DelNodeView';

m.route.prefix ="";

m.route(
    document.body,
    '/', {
    '/': LandingView,
    '/home': HomeView,
    '/login': LoginView,
    '/mapbox': MapBoxView,
    '/add_nodes': AddNodeView,
    '/del_nodes': DelNodeView
},
);


