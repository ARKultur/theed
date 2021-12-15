import React from "react";
import {useParams} from "react-router-dom";
import places from '../../places.json';

const NodeDetail = () => {
  const params = useParams();
  return (
    <div>
      <form className="max-w-md mx-auto rounded-lg shadow-xl overflow-hidden p-6 space-y-10">
        <h2 className="text-2xl font-bold text-center">{places.places[params.id].name}</h2>
        <div className="relative">
          <p>Description :</p>
          <textarea id="name" className={"border-2 border-gray-200 border-opacity-75 w-full"}/>
        </div>
        <div className={"text-center"}>
          <input
            className={"transition duration-150 ease-in-out rounded-lg bg-blue-500 hover:bg-blue-600 text-white cursor-pointer p-2"}
            type="submit" value="Submit"/>
        </div>
      </form>
    </div>
  )
}

export default NodeDetail;