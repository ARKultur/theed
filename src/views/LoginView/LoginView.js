import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { userContext } from "../../contexts/usrContext";
import qs from 'querystring';

const LoginView = () => {
    const nav = useNavigate();
    const [inputs, setInputs] = useState({email: '', password: ''});
    const {user, setUser} = useContext(userContext);
    const [alerts, setAlerts] = useState();
    const logUser = () => {
        console.log(inputs);
        axios.post('http://localhost:4000/api/login', qs.stringify(inputs))
        .then((res) => {
            if (res.status === 200) {
                setAlerts();
                setUser(res.data);
                nav('/');
            }
        })
        .catch((err) => {
            setAlerts(<div className="bg-red-600 text-white text-center p-4">U fucking donkey</div>)
        })
    }
    return (
        <div className="flex flex-col w-96 m-auto">
            {alerts}
            <input onChange={(e) => setInputs({...inputs, email: e.target.value})} className="grid-cols-1 my-2 border-2 border-gray-300 p-2" type="email" placeholder="Email"/>
            <input onChange={(e) => setInputs({...inputs, password: e.target.value})} className="grid-cols-1 my-2 border-2 border-gray-300 p-2" type="password" placeholder="password"/>
            <button className="bg-blue-400 p-2 rounded-md" onClick={logUser}>log me in daddy</button>
        </div>
    )
}

export default LoginView;