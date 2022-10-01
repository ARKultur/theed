import m from 'mithril';
import 'flowbite';

const MobileMenuButtonComponent = {
    view: function (_vnode) {
        return m('button', {
            'class': 'inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg \
                                    lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 \
                                    dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600',
            'data-collapse-toggle': 'mobile-menu-2',
            'type': 'button',
            'aria-controls': 'mobile-menu-2',
            'aria-expanded': false
        }, [
            m('span', {
                'class': 'sr-only'
            }, 'Main menu'),
            m('svg', {
                'class': 'w-6 h-6',
                'fill': 'currentColor',
                'viewBox': '0 0 20 20',
                'xmlns': 'http://www.w3.org/2000/svg',
            }, m('path', {
                'fill-rule': 'evenodd',
                'd': 'M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 \
                                1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z',
                'clip-rule': 'evenodd',
            })
            ),
            m('svg', {
                'class': 'hidden w-6 h-6',
                'fill': 'currentColor',
                'viewBox': '0 0 20 20',
                'xmlns': 'http://www.w3.org/2000/svg',
            }, m('path', {
                'fill-rule': 'evenodd',
                'clip-rule': 'evenodd',
                'd': 'M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 \
                                    4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z',
            })
            )
        ])
    }
}

export default MobileMenuButtonComponent;
