import MainPageSpeechComponent from '../components/Speech/MainPage';
import TopbarComponent from '../components/Bars/Topbar';

import m from 'mithril';
import FooterComponent from '../components/FooterComponent';

const LandingView = {
    view: function (_vnode) {
        return m('root', [
            m(TopbarComponent),
            m(MainPageSpeechComponent),
            m(FooterComponent),
        ]);
    },
};

export default LandingView;
