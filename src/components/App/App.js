import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, } from "react-router-dom";
import { mapContext } from "../../contexts/mapContext";
import HomeView from "../../views/HomeView";
import NodesView from "../../views/NodesView";
import SingleNodeView from "../../views/NodesView/SingleNodeView";
import ErrorView from "../../views/ErrorView";
import AdminView from "../../views/AdminView";
import Header from '../Header';
import Map from '../Map'
import './App.css';
import errorView from "../../views/ErrorView";

function App() {
  const [lng, setLng] = useState(4.8348);
  const [lat, setLat] = useState(45.7556);
  return (
    <mapContext.Provider value={{lng, setLng, lat, setLat}}>
    <div>
      <Router>
      <Header/>
        <Routes>
          <Route path="/" element={<HomeView/>} />
          <Route path="/login" element={<p>eh sale batar co toi ou je te fume ici on fait de la drill</p>} />
          <Route path="/nodes" element={<NodesView/>} />
          <Route path="/nodes/add" element={<p>bite</p>} />
          <Route path="/nodes/stats" element={<p>bite</p>} />
          <Route path="/nodes/edit/:id" element={<SingleNodeView/>} />
          <Route path="/admin/" element={<AdminView/>} />
          <Route path="*" element={<ErrorView/>} />
        </Routes>
      </Router>
    </div>
    </mapContext.Provider>
);
}

export default App;
