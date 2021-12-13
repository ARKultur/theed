import { useContext } from "react";
import {useNavigate} from "react-router";
import { userContext } from "../../contexts/usrContext";

const Header = () => {
  const nav = useNavigate();
  const {user} = useContext(userContext);
  const mainmenu =  [<div className="flex font-bold text-xl item w-full justify-center">
  <div onClick={() => nav('/')}
       className="transition duration-150 ease-in-out m-3 rounded-lg hover:bg-blue-500 hover:text-white cursor-pointer p-3">Home
  </div>
  <div onClick={() => nav('/nodes')}
       className="transition duration-150 ease-in-out m-3 rounded-lg hover:bg-blue-500 hover:text-white cursor-pointer p-3">Nodes
  </div>
  <div onClick={() => nav('/admin')}
       className="transition duration-150 ease-in-out m-3 rounded-lg hover:bg-blue-500 hover:text-white cursor-pointer p-3 ">Admin
  </div>
</div>]
  return (
    <div className="p-6 bg-white shadow-md flex mb-4 align-middle">
      <div className="items-start cursor-pointer mx-2 w-1/6" onClick={() => nav('/')}>
        <div className="text-4xl font-bold">Naboo</div>
        <div className="text-md font-light">Le dashboard ARKultur</div>
      </div>
      {user.jwt ? mainmenu : null}
    </div>
  )
}

export default Header;