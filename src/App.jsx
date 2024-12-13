import Routing from "./Routes/Routing"
import { onAuthStateChanged } from "firebase/auth"
import "./App.css"
import { useEffect } from "react"
import { auth } from "./firebase"
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const navigate = useNavigate();

  useEffect(()=>{
    onAuthStateChanged(auth,async(user)=>{
      if(user){
        console.log("Logged In");
        navigate("/");
      }
      else{
        console.log("Looged Out");
        navigate("/login");
      }

    })
  },[])
  return (
    <div>
      <Routing/>
      <ToastContainer theme="dark"/>
    </div>
  )
}

export default App