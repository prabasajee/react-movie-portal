import React from 'react';

const MovieCard = ({ movie, onClick, onAddFavorite, showAddFavorite, onRemoveFavorite, showRemoveFavorite }) => (
  <div style={{ cursor: 'pointer', border: '1px solid #eee', borderRadius: 8, padding: 10, margin: 10, width: 180, boxShadow: '0 2px 8px #eee', position: 'relative' }}>
    <img src={movie.Poster} alt={movie.Title} style={{ width: '100%', borderRadius: 4 }} onClick={onClick} />
    <h3 style={{ fontSize: '1.1rem', margin: '0.5rem 0' }} onClick={onClick}>{movie.Title}</h3>
    <p style={{ color: '#888', margin: 0 }}>{movie.Year}</p>
    {showAddFavorite && (
      <button onClick={(e) => { e.stopPropagation(); onAddFavorite(movie); }} style={{ position: 'absolute', top: 10, right: 10, background: '#ff9800', color: '#fff', border: 'none', borderRadius: 4, padding: '0.2rem 0.5rem', cursor: 'pointer' }}>
        + Fav
      </button>
    )}
    {showRemoveFavorite && (
      <button onClick={(e) => { e.stopPropagation(); onRemoveFavorite(movie); }} style={{ position: 'absolute', top: 10, left: 10, background: '#e53935', color: '#fff', border: 'none', borderRadius: 4, padding: '0.2rem 0.5rem', cursor: 'pointer' }}>
        Remove
      </button>
    )}
  </div>
);

export default MovieCard;
