import m from 'mithril';
import FooterMenuComponent from './Menus/FooterMenu';

const FooterComponent = {
    view: function (_vnode) {

        const companySubmenu = {
            name: 'Company',
            children: [
                {
                    name: 'About',
                    route: '/',
                },
                {
                    name: 'Blog',
                    route: '/',
                }
            ]
        };

        const helpSubmenu = {
            name: 'Support',
            children: [
                {
                    name: 'Discord Server',
                    route: '/',
                },
                {
                    name: 'Github Organisation',
                    route: '/',
                },
                {
                    name: 'Contact us',
                    route: '/',
                }
            ]
        };

        const legalSubmenu = {
            name: 'Legal',
            children: [
                {
                    name: 'Privacy Policy',
                    route: '/',
                },
                {
                    name: 'Licensing',
                    route: '/',
                },
                {
                    name: 'Terms',
                    route: '/',
                }
            ]
        };

        const projectsSubmenu = {
            name: 'Projects',
            children: [
                {
                    name: 'Naboo',
                    route: '/',
                },
                {
                    name: 'Theed',
                    route: '/',
                },
                {
                    name: 'Sentinel',
                    route: '/',
                },
                {
                    name: 'Arkham',
                    route: '/',
                }
            ]
        };

        const downloadsSubmenu = {
            name: 'Download',
            children: [
                {
                    name: 'Android',
                    route: '/',
                },
                {
                    name: 'iOS',
                    route: '/',
                }
            ]
        }

        const submenus = [companySubmenu, helpSubmenu, legalSubmenu, projectsSubmenu, downloadsSubmenu];

        return m('footer', {
            'class': 'bg-white dark:bg-gray-800'
        },
            m('div', {
                'class': 'max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10',
            }, [
                m('div', {
                    'class': 'grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5',
                }, submenus.map(function (menu) {
                    return m(FooterMenuComponent, {
                        name: menu.name,
                        submenus: menu.children
                    })
                })
                ),
                m('hr', {
                    'class': 'my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8',
                }),
                m('div', {
                    'class': 'text-center',
                }, [
                    m('a', {
                        'class': 'flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white',
                        'href': '#',
                    }, [
                        m('img', {
                            'src': 'public/images/logo.svg',
                            'alt': 'ARKutlur logo',
                            'class': 'h-6 mr-3 sm:h-9'
                        }),
                        "ARKutlur"
                    ]),
                    m('span', {
                        'class': 'block text-sm text-center text-gray-500 dark:text-gray-400',
                    }, "2022 - Built with mithril-js and tailwindcss")
                ]
                )
            ]
            )
        )
    }
};

export default FooterComponent;
