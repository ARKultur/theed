import m from 'mithril';

const MainPageSpeechComponent = {
    view: function (_vnode) {
        return m('section', {
            'class': 'bg-white dark:bg-gray-900',
        },
            m('div', {
                'class': 'grid max-w-screen-xl px-4 pt-20 pb-8 ' +
                    'mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28'
            },
                m('div', {
                    'class': 'mr-auto place-self-center lg:col-span-7',
                },
                    m('h1', {
                        'class': 'max-w-2xl mb-4 text-4xl font-extrabold leading-none ' +
                            ' tracking-tight md:text-5xl xl:text-6xl dark:text-white'
                    }, "Improving your cultural visits, using AR and AI")

                )
            )
        );
    }
};

export default MainPageSpeechComponent;
