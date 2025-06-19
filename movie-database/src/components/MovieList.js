import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies, onMovieClick, onAddFavorite, showAddFavorite, onRemoveFavorite, showRemoveFavorite }) => (
  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
    {movies.map((movie) => (
      <MovieCard
        key={movie.imdbID}
        movie={movie}
        onClick={() => onMovieClick(movie)}
        onAddFavorite={onAddFavorite}
        showAddFavorite={showAddFavorite}
        onRemoveFavorite={onRemoveFavorite}
        showRemoveFavorite={showRemoveFavorite}
      />
    ))}
  </div>
);

export default MovieList;
