import m from 'mithril';

const MainLogoComponent = {
    view: function (_vnode) {
        return m('a', {
            'class': 'flex items-center',
            'href': '#'
        },
            [
                m('img', {
                    'class': 'h-6 mr-3 sm:h-9',
                    'src': 'public/images/logo.svg',
                    'alt': 'ARKutlur logo'
                }),
                m('span', {
                    'class': 'self-center text-xl font-semibold whitespace-nowrap dark:text-white',
                }, 'ARKutlur')
            ],
        )
    }
};

export default MainLogoComponent;
