import { Routes, Route, useParams } from 'react-router-dom';
import Home from './Pages/Home';
import Search from './Pages/Search';
import Profil from './Pages/Profil';
import Navbar from './Components/NavBar';
import Movie from './Pages/Movie';
import { useState } from 'react';

function App() {
  //State
  const [getId, setGetId] = useState();
  //Comportements

  //Rendez
  return (
    <div>
      <h1 className="gradient">
        <span>Movie</span>
        Browser
      </h1>
      <Routes>
        <Route path="/" element={<Home setGetId={setGetId} />} />
        <Route path="/search" element={<Search />} />
        <Route path="/profil" element={<Profil />} />
        <Route
          path="/movie"
          element={<Movie setGetId={setGetId} Id={getId} />}
        />
        {/* <Route path="/*" element={<NoMatch />} /> */}
      </Routes>
      <Navbar />
    </div>
  );
}

export default App;
