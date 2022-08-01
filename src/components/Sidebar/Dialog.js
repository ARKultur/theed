import m from 'mithril';

const SidebarDialog = {
  view: function(vnode) {
    const name = vnode.children[0];
    const icon = vnode.children[1];

    return [m('div', {
      'class': 'py-2 pl-4 mt-auto text-gray-400 capitalize ' +
                'text-gray-700 cursor-pointer select-none flex',
    }),

    /*
        TODO: add onClick handler once we have login forms =)
    */

    m('span', {
      'class': 'ml-8 capitalize crimsonpro black forty',
    }, [m(icon), name]),
    ];
  },
};

export default SidebarDialog;
