import React, {useState, useRef, useEffect} from "react";

const myNodes = [
    {
      "place_id": 281702476,
      "osm_id": 3318254,
      "localname": "Basilique Notre-Dame de Fourvière",
      "lat": "45.76231765",
      "lon": "4.822546009270466"
    },
    {
      "place_id": 95968491,
      "osm_id": 5013364,
      "localname": "Tour Eiffel",
      "lat": "48.858260200000004",
      "lon": "2.2944990543196795"
    }
  ]
;

const listNodes = myNodes.map((node) =>
  <tr>
    <td translate="no"
        className="py-2 pr-2 font-mono text-base text-violet-600 whitespace-nowrap border-t border-gray-200">{node.localname}
    </td>
    <td translate="no"
        className="py-2 pr-2 font-mono text-base text-violet-600 whitespace-nowrap border-t border-gray-200">{node.lat}
    </td>
    <td translate="no"
        className="py-2 pr-2 font-mono text-base text-violet-600 whitespace-nowrap border-t border-gray-200">{node.lon}
    </td>
  </tr>
);

const Nodes = () => {
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
        <tbody className="align-baseline">{listNodes}</tbody>
      </table>
    </div>
  )
}

export default Nodes;