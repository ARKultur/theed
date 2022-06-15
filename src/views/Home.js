import m from 'mithril';

import SidebarComponent from '../components/Sidebar';


const HomeView = {
  view: function() {
    return m('div', {
      'class': 'grid grid-cols-6'},
    [
      m('div',
          {'class': 'col-span-1'},
          m(SidebarComponent),
      ),
      m('div',
          {'class': 'col-span-5'},
          `Add Map here !`,
      ),
    ],
    );
  },
};

export default HomeView;
