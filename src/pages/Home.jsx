import { assets } from "../assets/asserts";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../css/Home.css"
const Home = () => {
    return (
        <div className="home_container">
            <Navbar />
            <div className="hero_container">
                <img src={assets.hero_banner} alt="banner" className="banner_img" />
                <div className="caption">
                    <img src={assets.hero_title} alt="title" />

                    <p>Discovering his ties to a secret ancient order, a young man living in modren Istanbul embarks on a quest to save the city from an immortal enemy.</p>
                    <div className="hero_btns">
                        <button className="btn"><img src={assets.play_icon} alt="play" />Play</button>
                        <button className="btn dark_btn"><img src={assets.info_icon} alt="information" />More Info</button>
                    </div>
                    <div className="title_cards ">
                        <Cards />
                    </div>
                </div>
            </div>
            <div className="new_cards">
                <Cards title={"Blockbuster Movies"} category={"top_rated"} />
                <Cards title={"Only on Netflix"} category={"popular"} />
                <Cards title={"Upcoming"} category={"upcoming"}/>
                <Cards title={"Top Pics for You"} category={"now_playing"} />

            </div>
            <Footer/>
        </div>
    )
}

export default Home