import { useContext, useEffect, useState } from 'react';
import { mapContext } from '../../contexts/mapContext';
import axios from 'axios';
import { userContext } from '../../contexts/usrContext';
const HomeSideBar = () => {
    const [sideBarList, setSideBarList] = useState([]);
    const { user } = useContext(userContext);
    const { lng, setLng, lat, setLat } = useContext(mapContext);
    console.log(`${lng} ${setLng} ${lat} ${setLat}`);
    useEffect(() => {
        setSideBarList([]);
        axios.get('http://localhost:4000/api/map/address', { headers: { "Authorization": `Bearer ${user.jwt}` } })
            .then((res) => {
                res.data.data.forEach((value, idx) => {
                    setSideBarList(state => [...state,
                    <div onClick={() => { setLng(value.longitude); setLat(value.latitude); }} className="transition ease-in-out duration-150 text-lg items-center p-5 border-b-2 hover:border-transparent border-gray-300 hover:bg-blue-400 hover:text-white">
                        <p className="font-bold">{value.display_name}</p>
                    </div>])
                })
            })
    }, [setLng, setLat, user])
    return (
        <div>
            <input type="text" placeholder="Search" className="p-3 border-b-2 w-full" />
            <div className="max-h-96 overflow-y-scroll">{sideBarList}</div>
        </div>
    )
}

export default HomeSideBar;