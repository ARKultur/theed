import m from 'mithril';


// TODO refactor this

const SidebarComponent = {
  view: function(vnode) {
    return m(
        'template', [
          m('div', {
            'class':
                    'flex flex-col w-64 h-full pt-2 pr-2 ' +
                    'bg-white border-r border-gray-300',
          },
          [
            m('div', {
              'class': 'flex items-center p-4',
            }, `Add Logo (img tag) here`),
            m('h1', {
              'class': 'ml-2 font-medium tracking-wide uppercase',
            }, `ARKultur`),
          ],
          ),
          m('div', {
            'class': 'mt-2',
          },
          [
            // Link to domains
            m('router-link', {
              'to': '/domains',
              'class': 'flex items-center px-4 py-2 tracking-wide' +
                'text-gray-700 rounded-r-full outline-none' +
                'cursor-pointer select-none g-green-200 text-gray-900 shadow',
            }),
            m('span', {
              'class': 'ml-4',
            }, `domains`),
            m('span', {
              'class': 'x-2 py-1 ml-auto text-xs font-medium leading-none' +
                'bg-gray-300 rounded-full',
            }),

            // Link to settings
            m('router-link', {
              'to': '/settings',
              'class': 'flex items-center px-4 py-2 tracking-wide' +
                'text-gray-700 rounded-r-full outline-none' +
                'cursor-pointer select-none g-green-200 text-gray-900 shadow',
            }),
            m('span', {
              'class': 'ml-4',
            }, `settings`),
            m('span', {
              'class': 'x-2 py-1 ml-auto text-xs font-medium leading-none' +
                'bg-gray-300 rounded-full',
            }),

          ],
          ),
        ],

    );
  },
};


export default SidebarComponent;
