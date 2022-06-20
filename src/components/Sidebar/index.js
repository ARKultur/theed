import m from 'mithril';

import SidebarLink from './Link';
import SidebarDialog from './Dialog';
import * as F from '@mithril-icons/feather';


const SidebarComponent = {
  view: function(vnode) {
    const lockupPath = vnode.children[0];

    return m(
        'div', {
          'class':
                'flex flex-col w-64 h-screen pt-2 pr-2 ' +
                'bg-white border-r border-gray-300',
        }, [
          m('div', {
            'class': 'flex items-center p-4',
          }, m('img', {
            'class': 'w-18 h-18',
            'alt': 'lockup',
            'src': lockupPath,
          }),
          ),
          m('div', {
            'class': 'mt-4 px-2',
          }, [
            m(SidebarLink, 'domains'),
            m('div', {'class': 'mt-4'}),
            m(SidebarLink, 'settings'),
          ]),
          m('div', {
            'class': 'flex flex-col pb-4 flex-1 align-bottom',
          }, m(SidebarDialog, ['logout', F.LogOut]),
          ),
        ],
    );
  },
};


export default SidebarComponent;
