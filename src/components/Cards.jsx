import { useEffect,useState } from "react";
import "../css/Cards.css";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Cards = ({title,category}) => {
    const [apiData,setApiData] = useState([]);

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYmYwOGVmZDY5MGI3ZGFmZDdjMmMxZjFlOTgyMDQyZiIsIm5iZiI6MTczMzg5MDM2Ni41Mzc5OTk5LCJzdWIiOiI2NzU5MTEzZTJiZTE1ODExYjQ0ZWZjOTMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.t2v0Dafk40kp8PQ0k648F7PxzK0bDxOcfdYQNF5UD6s'
        }
      };
      
      useEffect(()=>{
          fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
            .then(res => res.json())
            .then(res => setApiData(res.results))
            .catch(err => console.error(err));
      },[])



  return (
    <div className="cards_container">
        <h2>{title?title:"Popular on Netflix"}</h2>
        <div className="cards_list" >
            {
                apiData.map((card,index)=>{
                    return(
                        <Link to={`/player/${card.id}`} className="card" key={index}>
                            <img src={"https://image.tmdb.org/t/p/w500"+card.backdrop_path} alt="movie_cards" />
                            {console.log(card.backdrop_path )}
                            <p>{card.original_title}</p>
                        </Link>
                    )

                })
            }

        </div>

    </div>
  )
}

export default Cards