import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/organisms/Home";
import Login from "../components/organisms/Login";
import Tasks from "../components/pages/Modules/Tasks";
import Customers from '../components/pages/Modules/Clients'

const Router = () => {
  return (
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home/>}/>
          <Route path="/Tasks" element={<Tasks/>}/>
          <Route path="/Customers" element={<Customers/>}/>
        </Routes>
      </BrowserRouter>
  );
};

export default Router;
