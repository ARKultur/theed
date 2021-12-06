import { useEffect, useState } from 'react';
import places from '../../../places.json';

const HomeSideBar = () => {
    const [sideBarList, setSideBarList] = useState([]);
    useEffect(() => {
        places.places.forEach((value, idx) => {
            setSideBarList(...sideBarList, <div>
                <div>{idx}</div>
                <div>{value.name}</div>
                <div>{value.lat}</div>
                <div>{value.lng}</div>
                </div>)
        })
    })
    return (
        <div>{sideBarList}</div>
    )
}

export default HomeSideBar;