import './style.css';
import m from 'mithril';

import HomeView from './views/Home';
import LandingView from './views/LandingView';
import LoginView from './views/LoginView';
import MapBoxView from './views/MapBoxView';
import AddNodeView from './views/AddNodeView';
import DelNodeView from './views/DelNodeView';

m.route.prefix ="";
import RegisterView from './views/RegisterView';
import FeatureView from "./views/FeatureView";
import NotFoundView from "./views/NotFound";
import MaintenanceView from "./views/Maintenance";
import TeamView from "./views/TeamView";
import ProjectView from "./views/ProjectView";
import ProfileView from "./views/Profile";

m.route.prefix ="";


m.route(
    document.body,
    '/', {
    '/': LandingView,
    '/home': HomeView,
    '/login': LoginView,
    '/register': RegisterView,
    '/maintenance': MaintenanceView,
    '/team': TeamView,
    '/features': FeatureView,
    '/mapbox': MapBoxView,
    '/add_nodes': AddNodeView,
    '/del_nodes': DelNodeView,
    '/project': ProjectView,
    '/profile': ProfileView,
    '/:404': NotFoundView
},
);


