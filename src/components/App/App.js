import { BrowserRouter as Router, Routes, Route, Navigate, } from "react-router-dom";
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
  return (
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
  );
}

export default App;
