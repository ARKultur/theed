import MainPageSpeechComponent from '../components/Speech/MainPage';
import TopbarComponent from '../components/Bars/Topbar';

import m from 'mithril';

const LandingView = {
    view: function (_vnode) {
        return m('root', [
            m(TopbarComponent),
            m(MainPageSpeechComponent),
        ]);
    },
};

export default LandingView;
