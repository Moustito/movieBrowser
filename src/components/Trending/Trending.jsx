import React from 'react';
import star from '../../assets/images/star.png';
import { useState } from 'react';
import '../../assets/styles/Trending.css';

export default function Trending({ data }) {
  const [index, setIndex] = useState(0);

  const mod = (n, m) => {
    let result = n % m;

    // Return a positive value
    return result >= 0 ? result : result + m;
  };

  return (
    <div>
      <h2>Trending</h2>

      {data.map((item, i) => {
        const indexLeft = mod(index - 1, data.length);
        const indexRight = mod(index + 1, data.length);

        let className = 'card';

        if (i === index) {
          className = 'card card--active';
        } else if (i === indexRight) {
          className = 'card card--right';
        } else if (i === indexLeft) {
          className = 'card card--left';
        } else className = 'card';

        function handleClick() {
          if (i === indexRight) {
            setIndex((index + 1) % data.length);
            console.log(i);
            console.log(index);
          } else if (i === indexLeft) {
            setIndex((index - 1) % data.length);
            console.log(i);
            console.log(index);
          }
        }

        return (
          <div
            key={item.id}
            style={{
              backgroundImage: `url(http://image.tmdb.org/t/p/w300/${item.poster_path})`,
            }}
            className={className}
            onClick={() => handleClick()}
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
        );
      })}
    </div>
  );
}
