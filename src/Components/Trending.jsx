import { useState } from 'react';
import Api from './Api';
import Carousel from './Carousel';

export default function Trending() {
  //State
  const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(false);
  const url =
    'https://api.themoviedb.org/3/trending/all/day?api_key=de254949dc1b811372f9de427feafa91&language=fr-FR';

  //Comportements

  //Render
  return (
    <div>
      <h1>Trending</h1>
      <Api setData={setData} url={url} />
      <Carousel data={data} />
    </div>
  );
}
