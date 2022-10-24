import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../../assets/styles/Spotlight.css';
import play from '../../assets/images/icons/play.png';

export default function Spotlight() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://api.themoviedb.org/3/movie/' +
          randomId() +
          '?api_key=de254949dc1b811372f9de427feafa91&language=fr-FR'
      );
      setData(result.data);
    };
    fetchData();
  }, []);

  function randomId() {
    return Math.floor(Math.random() * 550) + 1;
  }

  console.log(data);

  return (
    <div
      className="imgBack"
      style={{
        backgroundImage: `url(http://image.tmdb.org/t/p/w400/${data.backdrop_path})`,
      }}
    >
      <div className="boxText">
        <img src={play} alt="play" />
        <p className="spotlight">Movie Spotlight</p>
        <p className="title">
          {data.title}
          {data.name}
        </p>
      </div>
    </div>
  );
}
