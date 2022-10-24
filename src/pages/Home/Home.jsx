import React from 'react';
import '../../assets/styles/Home.css';
import Spotlight from '../../components/Spotlight/Spotlight';
import Trending from '../../components/Trending/Trending';

export default function Home({ data }) {
  return (
    <div>
      <Spotlight />
      <Trending data={data} />
    </div>
  );
}
