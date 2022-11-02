import { useState } from 'react';
import axios from 'axios';
import search from '../assets/images/icons/search.png';

export default function Research({ setSearching }) {
  //State
  const [newSearch, setNewSearch] = useState('');
  const url =
    `https://api.themoviedb.org/3/search/movie?api_key=de254949dc1b811372f9de427feafa91&language=fr-FR&query=` +
    newSearch +
    `&page=1&include_adult=false`;

  //Comportements
  function handleChange(event) {
    setNewSearch(event.target.value);
    fetchData();
  }

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      const result = await response?.data;

      setSearching(result.results);
    } catch (e) {
      console.log(e);
    }
  };

  function handleSubmit(event) {
    event.preventDefault();

    fetchData();
  }

  //Render
  return (
    <div className="bg-gray-800 rounded-3xl flex p-3">
      <form action="submit" onSubmit={handleSubmit}>
        <button>
          <img src={search} />
        </button>
        <input
          className="bg-gray-800 text-white"
          value={newSearch}
          type="text"
          placeholder="Search your film..."
          onChange={handleChange}
        />
      </form>
    </div>
  );
}
