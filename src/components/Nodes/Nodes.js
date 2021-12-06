import React, {useState, useRef, useEffect} from "react";
import places from '../../places.json';

const Nodes = () => {
  const [placeList, setPlaceList] = useState([]);
  useEffect(() => {
    setPlaceList([]);
    places.places.forEach((value, idx) => {
      setPlaceList(state => [...state,
        <tr>
          <td translate="no"
              className="py-2 pr-2 font-mono text-base text-violet-600 whitespace-nowrap border-t border-gray-200">{value.name}
          </td>
          <td translate="no"
              className="py-2 pr-2 font-mono text-base text-violet-600 whitespace-nowrap border-t border-gray-200">{value.lat}
          </td>
          <td translate="no"
              className="py-2 pr-2 font-mono text-base text-violet-600 whitespace-nowrap border-t border-gray-200">{value.lng}
          </td>
        </tr>
      ])
    })
  }, [])
  return (
    <div className={"flex w-full justify-center"}>
      <table className="w-4/5 border-collapse text-left">
        <thead>
        <tr>
          <th className="z-20 sticky top-0 text-1 font-semibold text-gray-600 bg-white p-0">
            <div className="pb-2 pr-2 border-b border-gray-200 text-2xl">Nom</div>
          </th>
          <th className="z-20 sticky top-0 text-1 font-semibold text-gray-600 bg-white p-0">
            <div className="pb-2 pr-2 border-b border-gray-200 text-2xl">Latidude</div>
          </th>
          <th className="z-20 sticky top-0 text-1 font-semibold text-gray-600 bg-white p-0">
            <div className="pb-2 pr-2 border-b border-gray-200 text-2xl">Longitude</div>
          </th>
        </tr>
        </thead>
        <tbody className="align-baseline">{placeList}</tbody>
      </table>
    </div>
  )
}

export default Nodes;