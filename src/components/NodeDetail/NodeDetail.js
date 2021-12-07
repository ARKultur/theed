import React, {useState, useRef, useEffect} from "react";
import {useParams} from "react-router-dom";

const NodeDetail = () => {
  const params = useParams();
  return (
    <div className={"flex w-full justify-center"}>
      <h3>You are on node {params.id}</h3>
    </div>
  )
}

export default NodeDetail;