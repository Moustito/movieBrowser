import React from 'react';
import Spotlight from '../../components/Spotlight/Spotlight';
import Trending from '../../components/Trending/Trending';
import Slider from '../../components/Slider/Slider';

export default function Home({ data, setData }) {
  return (
    <div>
      <h1>Acceuil</h1>
      <Spotlight />
      <Slider />
      <Trending data={data} setData={setData} />
    </div>
  );
}
