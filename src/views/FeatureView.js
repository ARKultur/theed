import m from 'mithril';
import TopbarComponent from "../components/Bars/Topbar";
import FooterComponent from "../components/FooterComponent";

const FeatureElement = {
    view: function(vnode) {
        const alt = vnode.attrs.alt ? vnode.attrs.alt : "Image";
        const imageRight = vnode.attrs.imageRight ? 'flex-row-reverse' : 'flex-row';

        return m('div', {
                'class': `flex ${imageRight} mb-4`
            }, [
                m('img', {
                    'class': 'inline-block h-52 w-52 rounded-full mx-4 mt-5',
                    'src': `${vnode.attrs.imageLink}`,
                    'alt': `${alt}`
                }),
            m('div', {

            }, [
                m('h1', {
                    'class': 'items-center max-w-2xl mb-6 text-4xl font-extrabold leading-none  tracking-tight md:text-5xl xl:text-3xl dark:text-white'
                }, vnode.attrs.title),
                m('p', {
                    'class': 'max-w-2xl pt-4 mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400'
                }, `${vnode.attrs.text}`)
                ]
            )
            ]
        )
    }
}

const FeatureView = {
    view: function (_vode) {
        return m('root', [
            m(TopbarComponent),
            m('section', {
                'class': 'bg-white dark:bg-gray-900',
            },
                [
                    m('div', {
                        'class': 'max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:pt-28'
                    },
                        [
                            m('div', {
                                    'class': 'mb-8'
                                }, [
                                    m('h1', {
                                        'class': 'items-center max-w-2xl mb-4 text-4xl font-extrabold leading-none  tracking-tight md:text-5xl xl:text-6xl dark:text-white'
                                    }, "Features"),
                                    m('p', {
                                        'class': 'max-w-2xl font-light text-gray-500  md:text-lg lg:text-xl dark:text-gray-400 mb-3'
                                        }, "Our project offers two categories od feature depending on weather you are a tourist or a manager of cultural place. You have:"),
                                    m('div', {
                                        'class': 'flex flex-col'
                                        },
                                        [
                                            m('a', {
                                                'class': 'max-w-2xl font-light text-gray-500 md:text-lg lg:text-xl dark:text-gray-400 pl-2',
                                                'href': '#mobileSection'
                                            }, "- Mobile"),
                                            m('a', {
                                                'class': 'max-w-2xl mb-6 font-light text-gray-500 md:text-lg lg:text-xl dark:text-gray-400 pl-2',
                                                'href': '#dashboardSection'
                                            }, "- Dashboard"),
                                        ]
                                        )
                                    ]
                            ),
                            m('h1', {
                                'id': 'mobileSection',
                                'class': 'items-center max-w-2xl mb-6 text-4xl font-extrabold leading-none  tracking-tight md:text-5xl xl:text-6xl dark:text-white'
                                }, "Mobile"),
                            m(FeatureElement, {
                                imageLink : 'https://cdn.discordapp.com/avatars/206021742932656129/6ddb90cdbd2028c418089d18a6e6521b.webp?size=256',
                                alt: 'A feature',
                                text: 'Arkultur offers a interactive map that allow you to see all cultural places around you. With this map feel free to (re)discover your city!',
                                imageRight: false,
                                title: 'Interactive Map'
                            }),
                            m(FeatureElement, {
                                imageLink : 'https://cdn.discordapp.com/avatars/206021742932656129/6ddb90cdbd2028c418089d18a6e6521b.webp?size=256',
                                alt: 'A feature',
                                text: 'Augmented Reality is a very good technology to travel in the past. Look through your phone to see how the place was be in the past!',
                                imageRight: true,
                                title: 'Augmented Reality'
                            }),
                            m(FeatureElement, {
                                imageLink : 'https://cdn.discordapp.com/avatars/206021742932656129/6ddb90cdbd2028c418089d18a6e6521b.webp?size=256',
                                alt: 'A feature',
                                text: 'A complete management of your profile allow you to see only what you want to do.',
                                imageRight: false,
                                title: 'Profile'
                            }),
                            m('h1', {
                                'id': 'dashboardSection',
                                'class': 'items-center max-w-2xl mb-6 pt-3 text-4xl font-extrabold leading-none  tracking-tight md:text-5xl xl:text-6xl dark:text-white'
                            }, "Dashboard"),
                            m(FeatureElement, {
                                imageLink : 'public/images/MapBox.png',
                                alt: 'A feature',
                                text: 'Arkultur offers you an interactive map that facilitates the management of your cultural places.',
                                imageRight: false,
                                title: 'Interactive Map'
                            }),
                        ]
                    )
                ]
            ),
            m(FooterComponent)
        ]
    )
    }
}

export default FeatureView;
