import m from 'mithril';
import TopbarComponent from '../components/Bars/Topbar';
import FooterComponent from '../components/FooterComponent';

const TeamView = {
    view: function (_vnode) {
        return m('root', [
            m(TopbarComponent),
            m('section', {
                'class': 'bg-white dark:bg-gray-900',
            },
                [
                    m('div', {
                        'class': 'max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:pt-28'
                    },
                        m('div', {
                                'class': 'mb-8'
                            },
                            m('h1', {
                                'class': 'items-center max-w-2xl mb-4 text-4xl font-extrabold leading-none  tracking-tight md:text-5xl xl:text-6xl dark:text-white'
                            }, "Our Team")
                        ),
                        m('div', {
                            'class': 'grid grid-cols-4 gap-100'
                        }, [
                            m('div', {
                                'class': 'mb-4'
                                },
                                m('img', {
                                    'class': 'inline-block h-40 w-40 rounded-full',
                                    'src': 'https://cdn.discordapp.com/avatars/206021742932656129/6ddb90cdbd2028c418089d18a6e6521b.webp?size=256',
                                    'alt': 'Profile photo'
                                }),
                                m('p', {
                                    'class': 'max-w-2xl font-light text-white-500 md:text-lg lg:text-xl dark:text-white'
                                }, "Guillaume S."),
                                m('p', {
                                    'class': 'max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400'
                                }, "Team Leader")
                            ),
                            m('div', {
                                    'class': 'mb-4'
                                },
                                m('img', {
                                    'class': 'inline-block h-40 w-40 rounded-full ring-white',
                                    'src': 'https://cdn.discordapp.com/avatars/210432251198963722/a_c1756fc093cb349e092d994ace0acad0.gif?size=256',
                                    'alt': 'Profile photo'
                                }),
                                m('p', {
                                    'class': 'max-w-2xl font-light text-white-500 md:text-lg lg:text-xl dark:text-white'
                                }, "Guillaume D."),
                                m('p', {
                                    'class': 'max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400'
                                }, "Web/Back developer")
                            ),
                            m('div', {
                                    'class': 'mb-4'
                                },
                                m('img', {
                                    'class': 'inline-block h-40 w-40 rounded-full ring-white',
                                    'src': 'https://cdn.discordapp.com/avatars/249152859017445376/826973cca0e4975480c440b8343d9d78.webp?size=256',
                                    'alt': 'Profile photo'
                                }),
                                m('p', {
                                    'class': 'max-w-2xl font-light text-white-500 md:text-lg lg:text-xl dark:text-white'
                                }, "Bogdan G."),
                                m('p', {
                                    'class': 'max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400'
                                }, "Back developer")
                            ),
                            m('div', {
                                    'class': 'mb-4'
                                },
                                m('img', {
                                    'class': 'inline-block h-40 w-40 rounded-full ring-white',
                                    'src': 'https://cdn.discordapp.com/avatars/222073398195388426/a77e8fe6e176df022b4aecbb123191c3.webp?size=256',
                                    'alt': 'Profile photo'
                                }),
                                m('p', {
                                    'class': 'max-w-2xl font-light text-white-500 md:text-lg lg:text-xl dark:text-white'
                                }, "Maxime P."),
                                m('p', {
                                    'class': 'max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400'
                                }, "Web developer")
                            ),
                            m('div', {
                                    'class': 'mb-4'
                                },
                                m('img', {
                                    'class': 'inline-block h-40 w-40 rounded-full ring-white',
                                    'src': 'https://cdn.discordapp.com/avatars/818305741856833577/fbd1c2cd446f71072574f2b000a783d2.webp?size=256',
                                    'alt': 'Profile photo'
                                }),
                                m('p', {
                                    'class': 'max-w-2xl font-light text-white-500 md:text-lg lg:text-xl dark:text-white'
                                }, "Mehdi Z."),
                                m('p', {
                                    'class': 'max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400'
                                }, "Mobile developer")
                            ),
                            m('div', {
                                    'class': 'mb-4'
                                },
                                m('img', {
                                    'class': 'inline-block h-40 w-40 rounded-full ring-white',
                                    'src': 'https://cdn.discordapp.com/avatars/370219157180121095/c90c25fb29433384b32c53f1b96121b0.webp?size=256',
                                    'alt': 'Profile photo'
                                }),
                                m('p', {
                                    'class': 'max-w-2xl font-light text-white-500 md:text-lg lg:text-xl dark:text-white'
                                }, "Alan-steven L."),
                                m('p', {
                                    'class': 'max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400'
                                }, "Mobile developer")
                            ),
                            m('div', {
                                    'class': 'mb-4'
                                },
                                m('img', {
                                    'class': 'inline-block h-40 w-40 rounded-full ring-white',
                                    'src': 'https://cdn.discordapp.com/avatars/251875694529740810/1841c11f8898043240c38ce6f3bc2a1a.webp?size=256',
                                    'alt': 'Profile photo'
                                }),
                                m('p', {
                                    'class': 'max-w-2xl font-light text-white-500 md:text-lg lg:text-xl dark:text-white'
                                }, "Maxime S."),
                                m('p', {
                                    'class': 'max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400'
                                }, "Mobile developer")
                            ),
                            m('div', {
                                    'class': 'mb-4'
                                },
                                m('img', {
                                    'class': 'inline-block h-40 w-40 rounded-full ring-white',
                                    'src': 'https://cdn.discordapp.com/avatars/220124557166510080/21e9ea632a0c9f66bbdb0de510f07491.webp?size=256',
                                    'alt': 'Profile photo'
                                }),
                                m('p', {
                                    'class': 'max-w-2xl font-light text-white-500 md:text-lg lg:text-xl dark:text-white'
                                }, "Théo F."),
                                m('p', {
                                    'class': 'max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400'
                                }, "Mobile developer")
                            )
                        ])
                    )
                ]),
            m(FooterComponent),
        ]);
    },
};

export default TeamView;
