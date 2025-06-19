import React from 'react';
import MovieList from './MovieList';

const TrendingSection = ({ movies, onMovieClick }) => (
  <section style={{ margin: '2rem 0' }}>
    <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Trending Movies</h2>
    <MovieList movies={movies} onMovieClick={onMovieClick} showAddFavorite={false} />
  </section>
);

export default TrendingSection;
