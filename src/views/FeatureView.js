import m from 'mithril';
import TopbarComponent from "../components/Bars/Topbar";
import FooterComponent from "../components/FooterComponent";

const FeatureElement = {
    view: function(vnode) {
        const alt = vnode.attrs.alt ? vnode.attrs.alt : "Image";
        const imageRight = vnode.attrs.imageRight ? 'flex-row-reverse' : 'flex-row';

        return m('div', {
                'class': `flex ${imageRight}`
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
                    'class': 'max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400'
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
                                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet orci augue, ut gravida ex luctus quis. Curabitur ac sagittis enim. Maecenas tincidunt eros ipsum, ut sagittis elit cursus sagittis. Nunc tincidunt enim nec tortor faucibus maximus. Duis vel lectus blandit leo commodo auctor at et libero. Curabitur facilisis felis eros, id imperdiet sapien commodo et. Ut egestas arcu at ligula pharetra varius. Morbi eget ante eget erat commodo rutrum ac eu purus. Aenean dui mi, scelerisque nec viverra eget, pretium vitae nunc.',
                                imageRight: false,
                                title: 'Interactive Map'
                            }),
                            m(FeatureElement, {
                                imageLink : 'https://cdn.discordapp.com/avatars/206021742932656129/6ddb90cdbd2028c418089d18a6e6521b.webp?size=256',
                                alt: 'A feature',
                                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet orci augue, ut gravida ex luctus quis. Curabitur ac sagittis enim. Maecenas tincidunt eros ipsum, ut sagittis elit cursus sagittis. Nunc tincidunt enim nec tortor faucibus maximus. Duis vel lectus blandit leo commodo auctor at et libero. Curabitur facilisis felis eros, id imperdiet sapien commodo et. Ut egestas arcu at ligula pharetra varius. Morbi eget ante eget erat commodo rutrum ac eu purus. Aenean dui mi, scelerisque nec viverra eget, pretium vitae nunc.',
                                imageRight: true,
                                title: 'Augmented Reality'
                            }),
                            m(FeatureElement, {
                                imageLink : 'https://cdn.discordapp.com/avatars/206021742932656129/6ddb90cdbd2028c418089d18a6e6521b.webp?size=256',
                                alt: 'A feature',
                                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet orci augue, ut gravida ex luctus quis. Curabitur ac sagittis enim. Maecenas tincidunt eros ipsum, ut sagittis elit cursus sagittis. Nunc tincidunt enim nec tortor faucibus maximus. Duis vel lectus blandit leo commodo auctor at et libero. Curabitur facilisis felis eros, id imperdiet sapien commodo et. Ut egestas arcu at ligula pharetra varius. Morbi eget ante eget erat commodo rutrum ac eu purus. Aenean dui mi, scelerisque nec viverra eget, pretium vitae nunc.',
                                imageRight: false,
                                title: 'Profile'
                            }),
                            m('h1', {
                                'id': 'dashboardSection',
                                'class': 'items-center max-w-2xl mb-4 text-4xl font-extrabold leading-none  tracking-tight md:text-5xl xl:text-6xl dark:text-white'
                            }, "Dashboard"),
                            m(FeatureElement, {
                                imageLink : 'public/images/MapBox.png',
                                alt: 'A feature',
                                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet orci augue, ut gravida ex luctus quis. Curabitur ac sagittis enim. Maecenas tincidunt eros ipsum, ut sagittis elit cursus sagittis. Nunc tincidunt enim nec tortor faucibus maximus. Duis vel lectus blandit leo commodo auctor at et libero. Curabitur facilisis felis eros, id imperdiet sapien commodo et. Ut egestas arcu at ligula pharetra varius. Morbi eget ante eget erat commodo rutrum ac eu purus. Aenean dui mi, scelerisque nec viverra eget, pretium vitae nunc.',
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
