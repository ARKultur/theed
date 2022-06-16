import m from 'mithril';

const SidebarDialog = {
  view: function(vnode) {
    const name = vnode.children[0];

    return [m('div', {
      'class': 'py-2 pl-4 mt-auto text-gray-400 capitalize ' +
                'text-gray-700 cursor-pointer select-none',
    }),

    /*
        TODO: add some icon here maybe ?
            + add onClick handler once we have logout functionnality
    */

    m('span', {
      'class': 'ml-4 capitalize crimsonpro black forty',
    }, name),
    ];
  },
};

export default SidebarDialog;
