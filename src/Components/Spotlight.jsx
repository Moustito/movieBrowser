import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../Styles/Spotlight.css';
import play from '../assets/images/icons/play.png';

export default function Spotlight({ setGetId }) {
  //State
  const [data, setData] = useState([]);
  const url =
    'https://api.themoviedb.org/3/movie/' +
    radomId() +
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
  function radomId() {
    return Math.floor(Math.random() * 550) + 1;
  }
  function getId() {
    setGetId(data.id);
  }

  //Render
  return (
    <Link className="p-2.5" to="/movie" onClick={getId}>
      <div className="BoxOpacity w-3/4">
        <img className="play" src={play} alt="Icon Play" />
        <p className="spot">Movie Spotlight</p>
        <p className="title">
          {data.title}
          {data.name}
        </p>
      </div>
      <img
        className="rounded-3xl w-full"
        src={`http://image.tmdb.org/t/p/w500/${data.backdrop_path}`}
        alt={`poster ${data.name}${data.title}`}
      />
    </Link>
  );
}
