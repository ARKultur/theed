import m from 'mithril';
import TopbarComponent from "../components/Bars/Topbar";
import FooterComponent from "../components/FooterComponent";
import HomePageButton from "../components/Buttons/HomePageButton";

const NotFoundView = {
    view: function (_vnode) {
        return m('root', [
            m(TopbarComponent),
            m('section', {
                'class': 'bg-white dark:bg-gray-900'
            },
                m('div', {
                    'class': 'grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28'
                },
                    [
                        m('div', {
                                'class': 'mr-auto place-self-center lg:col-span-7',
                            },
                            m('h1', {
                                'class': 'max-w-2xl mb-4 text-4xl font-extrabold leading-none ' +
                                    ' tracking-tight md:text-5xl xl:text-6xl dark:text-white'
                            }, "OOPS..."),
                            m('p', {
                                'class': 'max-w-2xl mb-6 font-light text-gray-500 lg:mb-8' +
                                    ' md:text-lg lg:text-xl dark:text-gray-400'
                            }, "It seem there is nothing to discover here sorry."),
                            m('div', {
                                'class': 'space-y-4 sm:flex sm:space-y-0 sm:space-x-4',
                            },
                                m(HomePageButton)
                            )
                        ),
                        m('div', {
                            'class': 'hidden lg:mt-0 lg:col-span-5 lg:flex',
                        }, m('img', {
                                'src': 'public/images/stylish-logo.svg',
                                'alt': 'stylish logo'
                            }
                        ))
                    ]
                )),
            m(FooterComponent)
        ]);
    }
}

export default NotFoundView;
