import { assets } from "../assets/asserts";
import "../css/Footer.css";

const Footer = () => {
  return (
    <div className="footer_container">
        <div className="footer_icon">
            <img src={assets.facebook_icon} alt="facebook_icon"/>
            <img src={assets.instagram_icon} alt="instagram_icon"/>
            <img src={assets.twitter_icon} alt="twitter_icon"/>
            <img src={assets.youtube_icon} alt="youtube_icon"/>

        </div>
        <ul>
            {
                ["Audio Description","Help Centre","Gift Cards","Media Centre","Investor Relations","Jobs","Terms of Use","Privacy","Legal Notices","Cookie Preferences","Corporate Information","Contact Us"]
                .map((item,i)=>{
                    return(
                    <li key={i}>{item}</li>)
                })
            }
        </ul>
        <p className="copyright_text">©1997-2024 Netflix, Inc.</p>
    </div>
  )
}

export default Footer