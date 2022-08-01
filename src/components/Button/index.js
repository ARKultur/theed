import m from 'mithril';

const ButtonComponent = {
  view: function(vnode) {
    const buttonName = vnode.attrs.get('name', 'Click Me !');
    const behaviour = vnode.attrs.get('behaviour',
        () => console.log('clicked !'));

    return m('form', {
      'class': 'bg-gray-900 opacity-75 w-full' +
        'shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4',
    },
    m('div', {
      'class': 'bg-gradient-to-r from-purple-800 ' +
            'to-green-500 hover:from-pink-500 ' +
            'hover:to-green-500 text-white font-bold ' +
            'py-2 px-4 rounded focus:ring transform ' +
            'transition hover:scale-105 duration-300 ease-in-out',
      'type': 'button',
      'onclick': behaviour,
    }),
    buttonName,
    );
  },
};

export default ButtonComponent;
