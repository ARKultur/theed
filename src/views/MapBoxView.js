import m from 'mithril';
import mapboxgl from 'mapbox-gl';

function Map() {
    let map;
    let mouse_pos = mapboxgl.LngLat;

    return {
        oncreate: function(_vnode) {
            console.log(window.innerWidth)
            mapboxgl.accessToken = 'pk.eyJ1IjoiY3B0bmZpc2giLCJhIjoiY2xhOWlsazhjMDkwYTNxdDV6OXdtbmttNSJ9.a3hG_UE-lcUZbnCLTrTQYA';
            map = new mapboxgl.Map({
                container: _vnode.dom,
                 style: 'mapbox://styles/mapbox/streets-v11',
                 center: [-74.5, 40],
                 zoom: 9,
                 projection: 'globe',
             });
            map.on('load', function () {
                map.resize();
                map.loadImage('https://cdn.discordapp.com/emojis/853541357763166219.webp?size=96&quality=lossless', (error, image) => {
                    if (error) throw error;
                    map.addImage('fishe', image);
                });
                map.addSource('points', {
                    'type': 'geojson',
                    'data': {
                        'type': 'FeatureCollection',
                        'features': [
                        ]
                }});
                map.addLayer({
                    'id': 'points',
                    'type': 'symbol',
                    'source': 'points',
                    'layout': {
                    'icon-image': 'fishe',
                    // get the title name from the source's "title" property
                    'text-field': ['get', 'title'],
                    'text-font': [
                    'Open Sans Semibold',
                    'Arial Unicode MS Bold'
                    ],
                    'text-offset': [0, 1.25],
                    'text-anchor': 'top'
                    }
                });
                if (localStorage.hasOwnProperty("points")) {
                    let points = JSON.parse(localStorage.getItem("points"));
                    let data = map.getSource("points")["_data"];
                    for (let i = 0; i < points.length; i++)
                    {
                        data.features.push(points[i])
                    }
                    map.getSource("points").setData(data);
                    console.log("loaded");
                }
            });

            map.on('mousemove', e => {
                mouse_pos = e.lngLat.wrap();
            })
        },
        onresize: function() {
            map.resize()
        },
        onscroll: function()
        {
            map.resize()
        },

        view: function() {
            return m('div', { 'class': 'flex flex-row-reverse mb-4', style: {
                position: 'absolute',
                height: `${window.innerHeight}px`,
                width: `${window.innerWidth}px`,
                backgroundColor: 'lightblue',
                "z-index": 1
              }, tabindex: '0',
            }, [m(m.route.Link, {
                'class': 'text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 \
                focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 \
                py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600  \
                dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800',
                style: ` z-index: 2;`,
                "href": "/add_nodes"
              }, "Add node"), m(m.route.Link, {
                'class': 'text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 \
                focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 \
                py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600  \
                dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800',
                style: `z-index: 2;`,
                "href": "/del_nodes"
              }, "Remove node")])
        }
    }
} 

const MapBoxView = {
    view: function (_vnode) {
        return m(Map);
    }
}

export default MapBoxView;
