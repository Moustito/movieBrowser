import React from 'react';
import InputSearch from '../../components/InputSearch/InputSearch';
import MoviesList from '../../components/MoviesList/MoviesList';

export default function Search() {
  return (
    <div>
      <h1>Search</h1>
      <InputSearch />
      <MoviesList />
    </div>
  );
}
