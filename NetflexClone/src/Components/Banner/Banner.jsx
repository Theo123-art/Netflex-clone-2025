import axios from "../../Utils/Axios";
import requested from "../../Utils/Requested";
import { useEffect, useState } from "react";
import "./Banner.css";

const Banner = () => {

  const [movie, setMovie] =useState({});

  useEffect(()=>{
    (async ()=>{
      try {
  const request = await axios.get(requested.fetchNetflixOrginals)
  console.log(request);
  setMovie(request.data.results[Math.floor(Math.random()* request.data.results.length)]);
      } catch (error) {
        console.log("error",error);
      
  }})()

  },[])


return (
    <div
      className="banner"
      style={{
        backgroundSize: 'cover',
        backgroundImage:  `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
        backgroundPosition: 'center center',
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">{movie?.overview}</h1>
      </div>
      <div className="banner_fadeBottom"></div>
    </div>
  );
}

export default Banner
