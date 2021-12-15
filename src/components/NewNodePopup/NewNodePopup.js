import axios from "axios";
import { useContext, useState } from "react";
import { userContext } from "../../contexts/usrContext";

const NewNodePopup = (props) => {
    ///api/map/address 
    const { user } = useContext(userContext);
    const [inputs, setInputs] = useState("")
    const submit = (e) => {
        e.preventDefault();
        console.log(user.jwt);
        axios.post('http://localhost:4000/api/map/address', {
            address: {
                city: "Fuck you",
                country: "Fuck you",
                country_code: "Fuck you",
                postcode: "Fuck you",
                state: "Fuck you",
                state_district: "Fuck you",
                display_name: inputs,
                latitude: String(props.event.lngLat.lat),
                longitude: String(props.event.lngLat.lng),
                osm_id: "Fuck you",
                place_id: "Fuck you",
                description: "Fuck you",
            }
        }, { headers: { "Authorization": `Bearer ${user.jwt}` } })
            .then((res) => {
                props.setPopUp();
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="absolute left-10 top-10 p-6 w-1/4 shadow-2xl align-middle justify-center bg-white">
            <div className="text-xl font-bold">New node</div>
            <form className="flex flex-col">
                <label>Longitude</label>
                <input className="p-2 my-2 bg-white border-2 border-gray-100 rounded-md" type="text" disabled value={props.event.lngLat.lat} />
                <label>Latitude</label>
                <input className="p-2 my-2 bg-white border-2 border-gray-100 rounded-md" type="text" disabled value={props.event.lngLat.lng} />
                <label>Node name</label>
                <input onChange={(e) => setInputs(e.target.value)} className="p-2 my-2 bg-white border-2 border-gray-100 rounded-md" type="text" placeholder='Node name' />
                <button onClick={submit} className='p-2 bg-blue-400 text-white rounded-md'>Create node</button>
            </form>
            <button onClick={() => props.setPopUp()} className='p-2 w-full mt-4 bg-red-400 text-white rounded-md'>Close</button>
        </div>
    )
}

export default NewNodePopup;