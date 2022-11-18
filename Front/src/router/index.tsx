import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/organisms/Home";
import Login from "../components/organisms/Login";

const Router = () => {
  return (
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
  );
};

export default Router;
