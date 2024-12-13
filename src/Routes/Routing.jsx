import { Route,Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Player from "../pages/Player";


const Routing = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/player/:id" element={<Player/>}/>
    </Routes>
  )
}

export default Routing;