import './App.css';
import { Routes, Route } from 'react-router-dom';
import React, { Fragment, useState, useEffect } from 'react';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import NoMatch from './pages/NoMatch/NoMatch';
import Search from './pages/Search/Search';
import Profil from './pages/Profil/Profil';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios();
      // 'url',

      setData(result.data);
    };
    fetchData();
  });

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/*" element={<NoMatch />} />
      </Routes>
      <Navbar />
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <p>{item.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
