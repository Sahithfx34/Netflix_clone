import { useEffect, useState } from 'react'
import { assets } from '../assets/asserts'
import '../css/Player.css'
import { useNavigate, useParams } from 'react-router-dom'


const Player = () => {
  const {id} =useParams();
  const navigate = useNavigate();

  const [apiData,setApiData] = useState({
    name:"",
    key:"",
    published_at:"",
    typeof:""
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYmYwOGVmZDY5MGI3ZGFmZDdjMmMxZjFlOTgyMDQyZiIsIm5iZiI6MTczMzg5MDM2Ni41Mzc5OTk5LCJzdWIiOiI2NzU5MTEzZTJiZTE1ODExYjQ0ZWZjOTMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.t2v0Dafk40kp8PQ0k648F7PxzK0bDxOcfdYQNF5UD6s"
    }
  };

  useEffect(()=>{
      fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,options)
      .then(res=>res.json())
      .then(res=>setApiData(res.results[0]))
      .catch(err=>console.error(err))
  },[])

  return (
    <div className='player_container'>
      <img src={assets.back_arrow} alt='backarrow' onClick={()=>{navigate(-2)}} />
      <iframe width="90%" height="90%" src={`https://www.youtube.com/embed/${apiData.key}`} title="trailer" frameBorder='0' allowFullScreen></iframe>
      <div className="player_info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>
          {apiData.name}
        </p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player