import { useState } from 'react';
import Api from './Api';
import Carousel from './Carousel';

export default function Similar({ Id, setGetId }) {
  //State
  const [data, setData] = useState([]);
  const url =
    'https://api.themoviedb.org/3/movie/' +
    Id +
    '/similar?api_key=de254949dc1b811372f9de427feafa91&language=fr-FR&page=1';

  //Comportements

  //Render
  return (
    <div>
      <h1 className="text-white font-medium text-base leading-7 tracking-tight pl-6">
        Related movies
      </h1>
      <Api setData={setData} url={url} />
      <Carousel setGetId={setGetId} data={data} />
    </div>
  );
}
