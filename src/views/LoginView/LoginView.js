import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { userContext } from "../../contexts/usrContext";
import qs from 'querystring';

const LoginView = () => {
    const nav = useNavigate();
    const [inputs, setInputs] = useState({ email: '', password: '' });
    const { setUser } = useContext(userContext);
    const [alerts, setAlerts] = useState();
    const logUser = (e) => {
        e.preventDefault();
        console.log(inputs);
        axios.post(`${process.env.REACT_APP_NABOO_HOST}/api/login`, qs.stringify(inputs))
            .then((res) => {
                if (res.status === 200) {
                    setAlerts();
                    setUser(res.data);
                    nav('/');
                }
            })
            .catch((err) => {
                setAlerts(<div className="mt-5 animate-pulse bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative text-center">Calmez-vous, asseyez vous</div>)
            })
    }
    return (
        <div className="flex flex-col w-96 m-auto">
            <h1 className="text-xl font-bold text-blue-400">Please log in</h1>
            <form className="flex flex-col">
                <input id="arkemail" onChange={(e) => setInputs({ ...inputs, email: e.target.value })} className="rounded-md my-2 border-2 shadow-sm border-gray-200 focus:bg-blue-100 focus:shadow-inner transition ease-in-out duration-150 p-2" type="email" placeholder="Email" />
                <input id="password" onChange={(e) => setInputs({ ...inputs, password: e.target.value })} className="rounded-md my-2 border-2 shadow-sm border-gray-200 focus:bg-blue-100 focus:shadow-inner transition ease-in-out duration-150 p-2" type="password" placeholder="password" />
                <button type="submit" className="bg-blue-400 text-white font-bold hover:bg-green-300 hover:text-green-600 transition ease-in-out p-2 rounded-lg shadow-md" onClick={logUser}>log me in daddy</button>
            </form>
            {alerts}
        </div>
    )
}

export default LoginView;