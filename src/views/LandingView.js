import m from 'mithril';
import 'flowbite';

import TopbarComponent from './components/Topbar';

const LandingView = {
    view: function (_vnode) {
        return TopbarComponent;
    },
};

export default LandingView;
