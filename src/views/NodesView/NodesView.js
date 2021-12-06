import { useNavigate } from "react-router-dom";

const NodesView = () => {
    const nav = useNavigate();
    return (
        <div>
            <button onClick={() => nav('/')}>ALLO</button>
        </div>
    )
}

export default NodesView;