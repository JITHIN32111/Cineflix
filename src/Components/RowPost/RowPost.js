import React,{useEffect,useState} from 'react'
import './RowPost.css'
import axios from '../../axios'
import {API_KEY,imageUrl} from '../../constants/constants'
import YouTube from 'react-youtube'


function RowPost(props) {
 

  const [movies,setMovies]=useState([])
  const[urlId,seturlId]=useState('')
  useEffect(()=>{
axios.get(props.url).then(response=>{
  setMovies(response.data.results)
  console.log(response.data);
})
  },[])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  }
  const handleMovies=(id)=>{

axios.get(`
/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
  if(response.data.results.length!==0 ){
    seturlId(response.data.results[0])
  }else{
    console.log('trailer not available');
  }
console.log(response.data);
})
  }
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
        {movies.map((obj)=>
        <img onClick={()=>handleMovies(obj.id)} className={props.isSmall ? 'smallPoster' :'poster' } src={`${imageUrl+obj.backdrop_path }`} alt="posters" />

        )}
     
      </div>
      { urlId && <YouTube opts={opts} videoId={urlId.key}/>}
    </div>
  )
}

export default RowPost
