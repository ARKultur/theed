import {useNavigate, useParams} from "react-router-dom";
import NodeDetail from "../../../components/NodeDetail";

const SingleNodeView = () => {
  const params = useParams();
  const nav = useNavigate();

  return (
    <div>
      <NodeDetail id={params.id}/>
      <div className='fixed bottom-0 w-full'>
        <button onClick={() => nav("/nodes")}
          className='my-8 mx-4 float-left px-5 py-2 bg-red-500 hover:bg-red-600 text-white text-md font-bold tracking-wider rounded-full focus:outline-none'>Back
        </button>
      </div>
    </div>
  )
}

export default SingleNodeView;