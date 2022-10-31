import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../Styles/Spotlight.css';
import Api from './Api';

export default function Spotlight({ Id }) {
  //State
  const [data, setData] = useState([]);
  const url =
    'https://api.themoviedb.org/3/movie/' +
    Id +
    '?api_key=de254949dc1b811372f9de427feafa91&language=fr-FR';

  //Comportements
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        const result = await response?.data;

        setData(result);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  //Render
  return (
    <div>
      <Link to="/">Retour</Link>
      <img
        src={`http://image.tmdb.org/t/p/w500/${data.backdrop_path}`}
        alt={`poster ${data.name}${data.title}`}
      />
      <p>
        {data.name}
        {data.title}
      </p>
      <p>{data.runtime} minutes</p>
      <p>{data.vote_average} (IMDb)</p>
      <p>{data.release_date}</p>
      {/* <p>{data.genres}</p> */}
      <p>{data.overview}</p>
    </div>
  );
}
