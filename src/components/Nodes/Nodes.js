import React, {useState, useRef, useEffect} from "react";
import places from '../../places.json';
import {useNavigate} from "react-router-dom";

const Nodes = () => {
  const [placeList, setPlaceList] = useState([]);
  const nav = useNavigate();

  useEffect(() => {
    setPlaceList([]);
    places.places.forEach((value, idx) => {
      setPlaceList(state => [...state,
        <li className="py-2 pr-2 font-mono text-base whitespace-nowrap border-t hover:bg-gray-100 hover:text-blue-700 cursor-pointer
          border-gray-200" onClick={() => nav('/nodes/edit/' + idx)}>{value.name}
        </li>
      ]);
    })
  }, [])
  return (
    <div className={"flex w-full justify-center"}>
      <ul className="w-1/2 border-collapse text-left">
        {placeList}
      </ul>
    </div>
  )
}

export default Nodes;