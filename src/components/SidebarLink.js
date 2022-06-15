import m from 'mithril';


const SidebarLink = {
  view: function(vnode) {
    const linkName = vnode.children[0];

    return [m(
        'router-link', {
          'to': '/' + linkName,
          'class': 'flex items-center px-4 py-2 tracking-wide' +
                'text-gray-700 rounded-r-full outline-none' +
                'cursor-pointer select-none g-green-200 text-gray-900 shadow',
        },
    ),
    m('span', {
      'class': 'ml-4',
    }, linkName,
    ),
    m('span', {
      'class': 'x-2 py-1 ml-auto text-xs font-medium leading-none' +
                'bg-gray-300 rounded-full',
    }),
    ];
  },
};

export default SidebarLink;
