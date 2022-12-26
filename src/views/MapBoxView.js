import m from 'mithril';
import mapboxgl from 'mapbox-gl';

function Map() {
    let map;

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
                if (localStorage.hasOwnProperty("points")) {
                    let points = JSON.parse(localStorage.getItem("points"));
                    for (let i = 0; i < points.length; i++)
                        new mapboxgl.Marker().setLngLat(points[i]).addTo(map);
                }
            });

            map.on('dblclick', (e) => {
                var points = [];
                if (localStorage.hasOwnProperty("points")) {
                    points = JSON.parse(localStorage.getItem("points"));
                    points.push(e.lngLat.wrap());
                    new mapboxgl.Marker().setLngLat(e.lngLat.wrap()).addTo(map);
                    localStorage.setItem("points",  JSON.stringify(points));
                    console.log("added");
                } else {
                    points.push(e.lngLat.wrap());
                    new mapboxgl.Marker().setLngLat(e.lngLat.wrap()).addTo(map);
                    localStorage.setItem("points",  JSON.stringify(points));
                    console.log("created");
                }            
            })
        },
        onremove: function() {
            map.destroy()
        },
        onresize: function() {
            map.resize()
        },
        view: function() {
            return m('div', {style: {
                position: 'absolute',
                height: `${window.innerHeight}px`,
                width: `${window.innerWidth}px`,
                backgroundColor: 'lightblue'
              }})
        }
    }
}

const MapBoxView = {
    view: function (_vnode) {
        return m(Map);
    }
}

export default MapBoxView;
