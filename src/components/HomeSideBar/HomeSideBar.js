import { useContext, useEffect, useState } from 'react';
import { mapContext } from '../../contexts/mapContext';
import places from '../../places.json';

const HomeSideBar = () => {
    const [sideBarList, setSideBarList] = useState([]);
    const {lng, setLng, lat, setLat} = useContext(mapContext);
    console.log(`${lng} ${setLng} ${lat} ${setLat}`);
    useEffect(() => {
        setSideBarList([]);
        places.places.forEach((value, idx) => {
            setSideBarList(state => [...state,
            <div onClick={() => {setLng(value.lng); setLat(value.lat);}} className="transition ease-in-out duration-150 text-lg items-center p-5 border-b-2 hover:border-transparent border-gray-300 hover:bg-blue-600 hover:text-white">
                <div>{value.name}</div>
            </div>])
        })
    }, [])
    return (
        <div>
            <input type="text" placeholder="Search" className="p-3 border-b-2 w-full"/>
            <div className="max-h-96 overflow-y-scroll">{sideBarList}</div>
        </div>
    )
}

export default HomeSideBar;