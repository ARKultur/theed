import mapboxgl from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import React, { useState, useRef, useEffect } from "react";
import '../../../node_modules/mapbox-gl/dist/mapbox-gl.css'
import style from './map.module.css';
import places from '../../places.json';

const Map = () => {
    mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_KEY;
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(4.8348);
    const [lat, setLat] = useState(45.7556);
    const [zoom, setZoom] = useState(15);
    const [markers, setMarkers] = useState([]);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
        });
        places.places.forEach((value, idx) => {
            setMarkers(state => [...state, new mapboxgl.Marker().setPopup(new mapboxgl.Popup().setHTML(`<h2>${value.name}</h2><button class="p-3 bg-green-200 rounded-lg">Edit</button>`)).setLngLat([value.lng, value.lat]).addTo(map.current)]);
        })
    });
    return (
        <div ref={mapContainer} className={style.mapboxgl_canvas + " w-full -mt-4 col-span-3"} />
    )
}

export default Map;