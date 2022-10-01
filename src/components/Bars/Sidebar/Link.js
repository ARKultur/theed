import m from 'mithril';


const SidebarLink = {
  view: function(vnode) {
    const linkName = vnode.children[0];

    return [m(
        m.route.Link, {
          'to': '/' + linkName,
          'class': 'flex items-center text-center px-4 py-2 tracking-wide ' +
                'rounded-lg bg-stone-100 ' +
                'cursor-pointer select-none shadow ' +
                'hover:bg-stone-200',
        },
        m('span', {
          'class': 'ml-4 font-medium font-creato-bold ' +
          'black eighty text-2xl capitalize',
        }, linkName,
        ),
        m('span', {
          'class': 'x-2 py-1 ml-auto text-xs font-medium leading-none' +
                'bg-gray-300 rounded-full',
        }),
    ),
    ];
  },
};

export default SidebarLink;
