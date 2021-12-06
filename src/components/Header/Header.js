import { useNavigate } from "react-router";

const Header = () => {
    const nav = useNavigate();
    return (
        <div className="p-6 bg-white text-left shadow-md flex mb-4 align-middle">
            <div className="items-start w-1/4">
                <div className="text-4xl font-bold">Naboo</div>
                <div className="text-md font-light">Le dashboard ARKultur</div>
            </div>
            <div className="align-middle w-3/4 items-center flex font-bold text-xl">
                <div onClick={() => nav('/')} className="transition duration-150 ease-in-out m-3 rounded-lg hover:bg-blue-500 hover:text-white cursor-pointer p-3">Home</div>
                <div onClick={() => nav('/nodes')} className="transition duration-150 ease-in-out m-3 rounded-lg hover:bg-blue-500 hover:text-white cursor-pointer p-3">Nodes</div>
                <div onClick={() => nav('/admin')} className="transition duration-150 ease-in-out m-3 rounded-lg hover:bg-blue-500 hover:text-white cursor-pointer p-3 ">Admin</div>
            </div>
        </div>
    )
}

export default Header;