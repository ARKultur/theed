import mapboxgl from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import React, { useState, useRef, useEffect, useContext } from "react";
import '../../../node_modules/mapbox-gl/dist/mapbox-gl.css'
import style from './map.module.css';
import { mapContext } from '../../contexts/mapContext';
import NewNodePopup from '../NewNodePopup/NewNodePopup';
import axios from 'axios';
import { userContext } from '../../contexts/usrContext';

const Map = () => {
    mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_KEY;
    const { lng, setLng, lat, setLat } = useContext(mapContext)
    const mapContainer = useRef(null);
    const map = useRef(null);
    const { user } = useContext(userContext);
    // const [lng, setLng] = useState(4.8348);
    // const [lat, setLat] = useState(45.7556);
    const [zoom, setZoom] = useState(15);
    const [popup, setPopUp] = useState();
    const [markers, setMarkers] = useState([]);

    useEffect(() => {
        if (map.current) {
            const center = map.current.getCenter();
            if (center.lng !== lng) {
                map.current.flyTo({ center: [lng, lat] });
                new mapboxgl.Popup({ closeOnClick: false })
                    .setLngLat([lng, lat])
                    .setHTML(`<div>
                    <h1>Edit me pls!</h1>
                    </div>`)
                    .addTo(map.current);
            }
            map.current.on('moveend', (e) => {
                const ncenter = map.current.getCenter();
                setLng(ncenter.lng);
                setLat(ncenter.lat);
            })
            console.log("Settings click handler...")
            map.current.on('click', (e) => {
                console.log("bite");
                setPopUp(<NewNodePopup setPopUp={setPopUp} event={e}/>)
            })
            return; // initia}lize map only once
        }
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
        });
        axios.get(`${process.env.REACT_APP_NABOO_HOST}/api/map/address`, {headers: {"Authorization": `Bearer ${user.jwt}`}})
        .then((res) => {
            console.log(res.data);
            console.log(res.data.data[0].latitude);
            res.data.data.forEach((value, idx) => {
                console.log(`${parseFloat(value.longitude)} ${parseFloat(value.longitude)}`)
                setMarkers(state => [...state, new mapboxgl.Marker().setPopup(new mapboxgl.Popup().setHTML(`<h2>${value.display_name}</h2><button class="p-3 bg-green-200 rounded-lg">Edit</button>`)).setLngLat([Number(value.longitude), Number(value.latitude)]).addTo(map.current)]);
            })
        })
    });
    return (
        <div ref={mapContainer} className={style.mapboxgl_canvas + " w-full -mt-4 col-span-3"}>
            {popup}
        </div>
    )
}

export default Map;