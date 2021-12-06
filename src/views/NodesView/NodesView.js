import {useNavigate} from "react-router-dom";
import Nodes from "../../components/Nodes";

const NodesView = () => {
  const nav = useNavigate();
  return (
    <div>
      <Nodes/>
    </div>
  )
}

export default NodesView;