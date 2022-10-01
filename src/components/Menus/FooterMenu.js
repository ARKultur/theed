import m from 'mithril';

const FooterSubMenuComponent = {
    view: function (vnode) {

        return m('li', {
            'class': 'mb-4',
        }, m('a', {
            'href': `${vnode.attrs.route}`,
            'class': 'hover:underline',
        }, vnode.attrs.name))
    }
}

const FooterMenuComponent = {
    view: function (vnode) {

        const submenus = vnode.attrs.submenus;
        const name = vnode.attrs.name;

        return m('div', [
            m('h3', {
                'class': 'mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white',
            }, name),
            m('ul', {
                'class': 'text-gray-500 dark:text-gray-400',
            },
                submenus.map(function (sub) {
                    return m(FooterSubMenuComponent, {
                        name: sub.name,
                        route: sub.route,
                    })
                })
            )
        ])
    }
}

export default FooterMenuComponent;
