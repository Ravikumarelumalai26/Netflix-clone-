import React, { useEffect,useState } from 'react'
import './player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png';
import { useNavigate, useParams} from 'react-router-dom';


function player() {


  const{id} = useParams();
  const navigate =useNavigate();
  

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: ""
   
  });



  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNjYwN2IxYmRiNjhjMWMwYWZkOGUwNDU0ZjVjYWEwZCIsIm5iZiI6MTczNzEyMTMzMy45NDEsInN1YiI6IjY3OGE1ZTM1MDljMzFkYWVhNDk3NmM2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KGJjhKRm35tW8fbenQaVtHbNUBRG2rjqT1czl7nUYoQ'
    }
  };
  useEffect(() => {
  
  fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
  .then(response => response.json())
  .then(response => setApiData(response.results[0]))
  .catch(err => console.error(err));
 },[] )




  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="" onClick={() =>{ navigate(-2)} }/>
      <iframe 
       
        src={`https://www.youtube.com/embed/${apiData.key}`}
        title='trailer' 
        frameBorder='0' 
        allowFullScreen>
      </iframe>
      <div className="player-info">
       
        
      </div>
    </div>
  )
}

export default player
