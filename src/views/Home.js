import m from 'mithril';

import SidebarComponent from '../components/Sidebar/index';
import MapboxComponent from '../components/Mapbox/index';


const HomeView = {
  view: function() {
    return m('div', {
      'class': 'grid grid-cols-6'},
    [
      m('div',
          {'class': 'col-span-1'},
          m(SidebarComponent, 'public/images/lockup.svg'),
      ),
      m('div',
          {'class': 'col-span-5'},
          m(MapboxComponent),
      ),
    ],
    );
  },
};

export default HomeView;
