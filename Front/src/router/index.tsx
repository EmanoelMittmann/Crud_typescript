import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/organisms/Home";
import Login from "../components/organisms/Login";
import Tasks from "../components/pages/Modules/Tasks";

const Router = () => {
  return (
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home/>}/>
          <Route path="/tasks" element={<Tasks/>}/>
        </Routes>
      </BrowserRouter>
  );
};

export default Router;
