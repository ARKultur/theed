import m from 'mithril';

const ModalCloseButtonComponent = {
    view: () =>
    m('.flex.justify-end.mb-6', [
        m(m.route.Link,
          {
              "href": "/mapbox"
          },
          m('span.mr-2', "Close"),
          m('span.i.fa.fa-times')),
    ]),
};

const NodeFormComponent = {
        
    view: function (_vnode) {
        return m('form', {
            onsubmit: function(e) {
                const form = new FormData(e.target);
                
                let points = new Array;
                if (localStorage.hasOwnProperty("points"))
                    points = JSON.parse(localStorage.getItem("points"));
                let test = {
                    geometry: {type: "Point", coordinates: [0.0,0.0]},
                    properties: {title: "Placeholder"},
                    type: "Feature"
                };
                test.geometry.coordinates = [form.get('lng'), form.get('lat')];
                test.properties.title = form.get('title');
                points.push(test);
                localStorage.setItem("points",  JSON.stringify(points));
                m.route.set('/mapbox');
            }
        }, [
                m('div', {
                    'class': 'mb-4'
                }, [
                    m('label', {
                        'class': 'block text-sm font-bold mb-2',
                        'for': 'lng',
                    }, "Longitude"),
                    m('input', {
                        'class': 'shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker',
                        'id': 'lng',
                        'name': 'lng',
                        'type': 'text',
                        'placeholder': '0.0',
                    }),
                    m('label', {
                        'class': 'block text-sm font-bold mb-2',
                        'for': 'lat',
                    }, "Latitude"),
                    m('input', {
                        'class': 'shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker',
                        'id': 'lat',
                        'name': 'lat',
                        'type': 'text',
                        'placeholder': '0.0',
                    })
                ]),
                m('div', {
                    'class': 'mb-6',
                }, [
                    m('label', {
                        'class': 'block text-sm font-bold mb-2',
                        'for': 'title'
                    }, "Node title"),
                    m('input', {
                        'class': 'shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker mb-3',
                        'id': 'title',
                        'name': 'title',
                        'type': 'text',
                        'placeholder': 'Placeholder'
                    })
                ]),
                m('div',
                        m('button', {
                            'class': 'bg-green hover:bg-purpe-dark text-grey-darker font-bold py px' +
                                ' rounded border-purple-darkest',
                            'type': 'submit',
                        }, "Add Node")
                    )
            ])
    }
};

const AddNodeView = {
    view: (_vnode) => {
      return m("div", {'class': 'pin flex items-center'},
      [
        m('div', {
            'class': 'pin bg-black opacity-75 z-10',
        }),
        m('div', {
            'class': 'relative mx-6 md:mx-auto w-full md:w-1/2 lg:w-1/3 z-20 m-8',
        },
            m('div', {
                'class': 'shadow-lg bg-white rounded-lg p-8',
            }, [
                m(ModalCloseButtonComponent),
                m('h1', {
                    'class': 'text-center text-2xl text-purple-dark',
                }, "Node informations"),
                m(NodeFormComponent),
            ])
        )
    ])
    }
}

export default AddNodeView;