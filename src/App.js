import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ContentUser from "./components/adminDashboard/ContentUser";
import NavAd from "./components/navBar/NavAd";
import Addevent from "./components/adminDashboard/Addevent";

import AddSpot from "./components/adminDashboard/addSpot/AddSpot";
import Usersettings from "./components/adminDashboard/Usersettings";

function App() {
  return (
    <div className="App ">
      <BrowserRouter>
        <NavAd />
        <Routes>
          <Route path="/" />
          <Route path="/user" element={<ContentUser />} />
          <Route path="/event" element={<Addevent />} />
          <Route path="/spot" element={<AddSpot/>} />
          <Route path="/settings" element={<Usersettings/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
