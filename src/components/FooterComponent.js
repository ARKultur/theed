import m from 'mithril';
import FooterMenuComponent from './Menus/FooterMenu';

const FooterComponent = {
    view: function (_vnode) {

        const companySubmenu = {
            name: 'Company',
            children: [
                {
                    name: 'About',
                    route: '/maintenance',
                    newPage: false,
                },
                {
                    name: 'Blog',
                    route: '/maintenance',
                    newPage: false,
                }
            ]
        };

        const helpSubmenu = {
            name: 'Support',
            children: [
                {
                    name: 'Discord Server',
                    route: '/maintenance',
                    newPage: false,
                },
                {
                    name: 'Github Organisation',
                    route: 'https://github.com/ARKultur',
                    newPage: true,
                },
                {
                    name: 'Contact us',
                    route: '/maintenance',
                    newPage: false,
                }
            ]
        };

        const legalSubmenu = {
            name: 'Legal',
            children: [
                {
                    name: 'Privacy Policy',
                    route: '/maintenance',
                    newPage: false,
                },
                {
                    name: 'Licensing',
                    route: '/maintenance',
                    newPage: false,
                },
                {
                    name: 'Terms',
                    route: '/maintenance',
                    newPage: false,
                }
            ]
        };

        const projectsSubmenu = {
            name: 'Projects',
            children: [
                {
                    name: 'Naboo',
                    route: 'https://github.com/ARKultur/naboo',
                    newPage: true,
                },
                {
                    name: 'Theed',
                    route: 'https://github.com/ARKultur/theed',
                    newPage: true,
                },
                {
                    name: 'Sentinel',
                    route: 'https://github.com/ARKultur/sentinel',
                    newPage: true,
                },
                {
                    name: 'Arkham',
                    route: 'https://github.com/ARKultur/arkham',
                    newPage: true,
                }
            ]
        };

        const downloadsSubmenu = {
            name: 'Download',
            children: [
                {
                    name: 'Android',
                    route: '/maintenance',
                    newPage: false,
                },
                {
                    name: 'iOS',
                    route: '/maintenance',
                    newPage: false,
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
                        'href': '/',
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
