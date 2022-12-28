import m from 'mithril';
import LoginButtonComponent from '../../Buttons/LoginButton';
import MobileMenuButtonComponent from '../../Buttons/MobileMenuButton';
import MainLogoComponent from '../../Logos/MainLogo';


const TopbarMenuComponent = {
    view: function (vnode) {
        const route = vnode.attrs.route;
        const text = vnode.attrs.text;
        const isCurrent = m.route.get() === route && route !== '/maintenance';

        const settings = (isCurrent) ? {
            'class': 'block py-2 pl-3 pr-4 text-white bg-purple-700' +
                ' rounded lg:bg-transparent lg:text-purple-700 lg:p-0 dark:text-white',
            'aria-current': 'page',
            'href': `${route}`
        } : {
            'class': 'block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100' +
                ' hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 ' +
                ' lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 ' +
                'lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white ' +
                'lg:dark:hover:bg-transparent dark:border-gray-700',
            'href': `${route}`
        }

        return m('li',
            m('a', settings, text)
        )
    }

};

const TopbarMenu = {
    view: function (_vnode) {
        return m('div', {
            'class': 'items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1',
        },
            m('ul', {
                'class': 'flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0',
            }, [
                m(TopbarMenuComponent, {
                    route: '/',
                    text: 'Home'
                }),
                m(TopbarMenuComponent, {
                    route: '/project',
                    text: 'Our project',
                }),
                m(TopbarMenuComponent, {
                    route: '/features',
                    text: 'Features',
                }),
                m(TopbarMenuComponent, {
                    route: '/team',
                    text: 'Our team',
                }),
                m(TopbarMenuComponent, {
                    route: '/maintenance',
                    text: 'Pricing',
                }),
                m(TopbarMenuComponent, {
                    route: '/maintenance',
                    text: 'Contact us',
                }),
            ]
            )
        )
    }
};


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
                        m(MainLogoComponent),
                        m('div', {
                            'class': 'flex items-center lg:order-2',
                        }, [
                            m(LoginButtonComponent, {
                                text: 'Log in',
                                href: '#'
                            })
                        ]),
                        m(MobileMenuButtonComponent),
                        m(TopbarMenu),
                    ]
                )
            ));
    },
};

export default TopbarComponent;
