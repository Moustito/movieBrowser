import React from 'react';
import './Trending.css';
import star from '../../assets/star.png';

export default function Trending({ data, setData }) {
  return (
    <div>
      <h1>Trending</h1>

      {data.map((item, index) => (
        <div
          key={index}
          style={{
            backgroundImage: `url(http://image.tmdb.org/t/p/w300/${item.poster_path})`,
          }}
          className="card"
        >
          <div className="rate backgroundGlass">
            <p className="imdb">IMDb</p>
            <img src={star} alt="rate-star" />
            <p className="rating">{item.vote_average}</p>
          </div>

          <h3 className="backgroundGlass">
            {item.name}
            {item.title}
          </h3>
        </div>
      ))}
    </div>
  );
}
