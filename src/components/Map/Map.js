import dotenv from "dotenv";
import mapboxgl from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import React, { useState, useRef, useEffect } from "react";

dotenv.config();
const Map = () => {
    mapboxgl.accessToken = "pk.eyJ1IjoidGhlb3Jpb25zYiIsImEiOiJja3d1ZnVjY3QxcTZoMnB1c2hpcHpycjd3In0.0vJdv4hXxoof4OGTfaBE0g";
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(4.834277);
    const [lat, setLat] = useState(45.763420);
    const [zoom, setZoom] = useState(13);
    const [dark, setDark] = useState(true);
    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
        });
    });
    return (
            <div ref={mapContainer} className="-mt-4 w-full max-h-screen h-screen overflow-y-hidden p-0"/>
    )
}

export default Map;