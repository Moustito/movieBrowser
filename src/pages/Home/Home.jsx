import React from 'react';
import Spotlight from '../../components/Spotlight/Spotlight';
import Trending from '../../components/Trending/Trending';

export default function Home({ data, setData }) {
  return (
    <div>
      <h1>Acceuil</h1>
      <Spotlight />
      <Trending data={data} setData={setData} />
    </div>
  );
}
