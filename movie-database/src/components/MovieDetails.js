import React from 'react';

const safe = (value) => (value && value !== 'N/A' ? value : 'Not available');

const MovieDetails = ({ movie, onBack }) => (
  <div style={{ maxWidth: 600, margin: '2rem auto', padding: 20, border: '1px solid #eee', borderRadius: 8, background: '#fafafa' }}>
    <button onClick={onBack} style={{ marginBottom: 20 }}>&larr; Back</button>
    <div style={{ display: 'flex', gap: 20 }}>
      <img src={safe(movie.Poster)} alt={safe(movie.Title)} style={{ width: 200, borderRadius: 4 }} />
      <div>
        <h2>{safe(movie.Title)} ({safe(movie.Year)})</h2>
        <p><strong>Genre:</strong> {safe(movie.Genre)}</p>
        <p><strong>Director:</strong> {safe(movie.Director)}</p>
        <p><strong>Actors:</strong> {safe(movie.Actors)}</p>
        <p><strong>Plot:</strong> {safe(movie.Plot)}</p>
        <p><strong>IMDB Rating:</strong> {safe(movie.imdbRating)}</p>
      </div>
    </div>
  </div>
);

export default MovieDetails;
