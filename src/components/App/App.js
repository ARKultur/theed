import { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { mapContext } from "../../contexts/mapContext";
import HomeView from "../../views/HomeView";
import NodesView from "../../views/NodesView";
import SingleNodeView from "../../views/NodesView/SingleNodeView";
import ErrorView from "../../views/ErrorView";
import AdminView from "../../views/AdminView";
import Header from '../Header';
import './App.css';
import LoginView from "../../views/LoginView/LoginView";
import { userContext } from '../../contexts/usrContext';

const RequireAuth = (props) => {
  const {user} = useContext(userContext);
  const nav = useNavigate();
  useEffect(() => user.jwt ? null : nav('/login'), [user, nav]);
  return (
    <>{props.children}</>
  )
}

function App() {
  const [lng, setLng] = useState(4.8348);
  const [lat, setLat] = useState(45.7556);
  const [user, setUser] = useState({});
  return (
    <userContext.Provider value={{ user, setUser }}>
      <mapContext.Provider value={{ lng, setLng, lat, setLat }}>
        <div>
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<RequireAuth><HomeView /></RequireAuth>} />
              <Route path="/login" element={<LoginView />}/>
              <Route path="/nodes" element={<RequireAuth><NodesView /></RequireAuth>} />
              <Route path="/nodes/add" element={<p>bite</p>} />
              <Route path="/nodes/stats" element={<p>bite</p>} />
              <Route path="/nodes/edit/:id" element={<RequireAuth><SingleNodeView /></RequireAuth>} />
              <Route path="/admin/" element={<RequireAuth><AdminView/></RequireAuth>} />
              <Route path="*" element={<ErrorView />} />
            </Routes>
          </Router>
        </div>
      </mapContext.Provider>
    </userContext.Provider>
  );
}

export default App;
