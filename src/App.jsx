import './assets/styles/reset.css';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import NoMatch from './pages/NoMatch/NoMatch';
import Search from './pages/Search/Search';
import Profil from './pages/Profil/Profil';
import Movie from './pages/Movie/Movie';

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
  }, []);

  return (
    <div className="App">
      <h1>
        <span className="gradient">Movie</span>
        Browser
      </h1>
      <Routes>
        <Route path="/" element={<Home data={data.results} />} />
        <Route path="/search" element={<Search />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/*" element={<NoMatch />} />
      </Routes>
      <Navbar />
    </div>
  );
}

export default App;
