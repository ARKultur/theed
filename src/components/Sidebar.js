import m from 'mithril';

import SidebarLink from './SidebarLink';


const SidebarComponent = {
  view: function(vnode) {
    const companyName = 'ARKultur';

    return m(
        'div', {
          'class':
                'flex flex-col w-64 h-full pt-2 pr-2 ' +
                'bg-white border-r border-gray-300',
        }, [
          m('div', {
            'class': 'flex items-center p-4',
          }, `add img tag logo here`),
          m('h1', {
            'class': 'ml-2 font-medium tracking-wide uppercase',
          }, companyName),
          m('div', {
            'class': 'mt-2',
          }, [
            m(SidebarLink, 'domains'),
            m(SidebarLink, 'settings'),
          ],
          ),
        ],
    );
  },
};


export default SidebarComponent;
