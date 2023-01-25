import MainPageSpeechComponent from '../components/Speech/MainPage';
import TopbarComponent from '../components/Bars/Topbar';

import m from 'mithril';
import FooterComponent from '../components/FooterComponent';

const LandingView = {
    view: function (_vnode) {
        document.title = "ARKultur";
        return m('root', [
            m('link[rel=icon][type=image/x-icon]', {
                href: 'public/images/icon-black.png'
            }),
            m(TopbarComponent),
            m(MainPageSpeechComponent),
            m(FooterComponent),
        ]);
    },
};

export default LandingView;
