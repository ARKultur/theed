import m from 'mithril';
import LoginButtonComponent from '../Buttons/LoginButton';
import MainLogoComponent from '../Logos/MainLogo';
import MobileMenuButtonComponent from '../Buttons/MobileMenuButton';

const TopbarComponent = {
    view: function (_vnode) {
        return m('header', {
            'class': 'fixed w-full',
        },
            m('nav', {
                'class': 'bg-white border-gray-200 py-2.5 dark:bg-gray-900'
            },
                m('div', {
                    'class': 'flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto'
                },
                    [
                        MainLogoComponent,
                        m('div', {
                            'class': 'flex items-center lg:order-2',
                        }, [
                            LoginButtonComponent({
                                'text': 'Log in',
                                'href': '/login'
                            })
                        ]),
                        MobileMenuButtonComponent,
                    ]
                )
            ));
    },
};

export default TopbarComponent;
