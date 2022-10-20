import './App.css';
import { Routes, Route } from 'react-router-dom';
import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import NoMatch from './pages/NoMatch/NoMatch';
import Search from './pages/Search/Search';
import Profil from './pages/Profil/Profil';

function App() {
  const [data, setData] = useState([]);
  let ApiKey = 'de254949dc1b811372f9de427feafa91';

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://api.themoviedb.org/3/trending/all/week?api_key=' +
          ApiKey +
          '&language=fr-FR'
      );
      setData(result.data);
    };
    fetchData();
    // console.log(data.id);
    // console.log(data.poster_path);
    console.log(data.name);
    // console.log(data.runtime);
    // console.log(data.vote_average);
    // console.log(data.release_date);
    // console.log(data.genres);
    // console.log(data.overview);
    console.log(data.results);
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home data={data} setData={setData} />} />
        <Route path="/search" element={<Search />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/*" element={<NoMatch />} />
      </Routes>
      <Navbar />
    </div>
  );
}

export default App;

// Trending
// https://api.themoviedb.org/3/trending/all/week?api_key=de254949dc1b811372f9de427feafa91&language=fr-FR
