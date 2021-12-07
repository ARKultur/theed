import {useNavigate, useParams} from "react-router-dom";
import NodeDetail from "../../../components/NodeDetail";

const SingleNodeView = () => {
  const params = useParams();
  const nav = useNavigate();

  return (
    <div>
      <NodeDetail id={params.id}/>
      <button onClick={() => nav("/nodes")} className="transition duration-150 ease-in-out m-3 rounded-lg bg-blue-500 hover:bg-blue-700 hover:text-white cursor-pointer p-3">Back to nodes</button>
    </div>
  )
}

export default SingleNodeView;