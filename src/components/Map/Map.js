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
    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/theorionsb/ckift6f5k4xj619k0dnphz0lr',
            center: [lng, lat],
            zoom: zoom
        });
    });
    return (
        <div>
            <div ref={mapContainer} className=" -mt-5 w-full h-screen p-0"/>
        </div>
    )
}

export default Map;