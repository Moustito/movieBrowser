import React from 'react';

export default function Trending({ data, setData }) {
  return (
    <div>
      <h1>Trending</h1>
      <ul>
        {data.results.map((item) => (
          <li key={item.id}>
            <p>{item.vote_average}</p>
            <img src={item.poster_path} alt="poster_path" />;
            <p>
              {item.name}
              {item.title}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
