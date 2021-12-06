import {useNavigate, useParams} from "react-router-dom";
import NodeDetail from "../../../components/NodeDetail";

const SingleNodeView = () => {
  const params = useParams();
  const nav = useNavigate();

  return (
    <div>
      <h3>Node id: {params.id}</h3>
      <NodeDetail/>
    </div>
  )
}

export default SingleNodeView;