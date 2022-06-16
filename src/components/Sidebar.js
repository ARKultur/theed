import m from 'mithril';

import SidebarLink from './SidebarLink';


const SidebarComponent = {
  view: function(vnode) {
    return m(
        'div', {
          'class':
                'flex flex-col w-64 h-full pt-2 pr-2 ' +
                'bg-white border-r border-gray-300',
        }, [
          m('div', {
            'class': 'flex items-center p-4',
          }, m('img', {
            'class': 'w-18 h-18',
            'alt': 'lockup logo',
            'src': 'public/images/lockup.svg',
          }),
          ),
          m('div', {
            'class': 'mt-4 px-2',
          }, [
            m(SidebarLink, 'domains'),
            m('div', {class: 'mt-4'}),
            m(SidebarLink, 'settings'),
          ],
          ),
        ],
    );
  },
};


export default SidebarComponent;
