import { assets } from "../assets/asserts";
import { logout } from "../firebase";


import "../css/Navbar.css"

const Navbar = () => {
    return (
        <div className="nav_container">
            <div className="nav_left">
                <img src={assets.logo} alt="logo" />
                <ul>
                    {
                        ["Home", "TV Shows", "Movies", "New & Popular", "My List", "Browse by Languages"].map((item, i) => {
                            return (
                                <li key={i}>{item}</li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className="nav_right">
                <img src={assets.search_icon} alt="search" className="icons" />
                <p>Children</p>
                <img src={assets.bell_icon} alt="bell_icon" className="icons" />
                <div className="nav_profile">
                    <img src={assets.profile_img} alt="profile" className="profile_icon" />
                    <img src={assets.caret_icon} alt="caret_icon" className="icons" />
                    <div className="nav_dropdown">
                        <p onClick={()=>logout()}>Sign Out</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar