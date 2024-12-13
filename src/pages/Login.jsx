import { useState } from "react"
import { assets } from "../assets/asserts"
import "../css/Login.css"
import { login,signup} from "../firebase";


const Login = () => {

    const [signState,setSignState] = useState("Sign In")
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("");
    const [loading,setLoading] = useState(false);

    const user_auth = async(e)=>{
        e.preventDefault();
        setLoading(true);
        if(signState==="Sign In"){
            await login(email,password);
        }else{
            await signup(name,email,password);
        }
        setLoading(false);
    }

  return (
    loading?<div className="login_spinner">
        <img src={assets.netflix_spinner} alt="loader"/>
    </div>:
    <div className="login_container">
        <img src={assets.logo} className="login_logo" alt="logo"/>
        <div className="login_form">
            <h1>{signState}</h1>
            <form>
                {signState ==="Sign Up"? <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="Enter Your Name"/>:<></>}

                
                <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter Your Email"/>
                <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Enter Password"/>
                <button onClick={user_auth} type="submit">{signState}</button>
                <div className="form_help">
                    <div className="remember">
                        <input type="checkbox"/>
                        <label htmlFor="">Remember Me</label>
                    </div>
                    <p>Need Help?</p>
                </div>
            </form>
            <div className="form_switch">
                {signState === "Sign In"? <p>New to Netflix?<span onClick={()=>{setSignState("Sign Up")}}>Sign Up Now</span></p>:<p>Already have account?<span onClick={()=>{setSignState("Sign In")}}>Sign In now</span></p>}
            </div>
        </div>

    </div>
  )
}

export default Login