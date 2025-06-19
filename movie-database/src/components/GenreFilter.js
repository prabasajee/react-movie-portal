import React from 'react';

const genres = [
  '', 'Action', 'Comedy', 'Drama', 'Thriller', 'Romance', 'Sci-Fi', 'Horror', 'Animation', 'Adventure', 'Crime', 'Fantasy', 'Mystery', 'Family', 'Biography', 'History', 'War', 'Western', 'Music', 'Sport', 'Documentary'
];

const GenreFilter = ({ value, onChange }) => (
  <div style={{ textAlign: 'center', margin: '1rem 0' }}>
    <select value={value} onChange={onChange} style={{ fontSize: '1rem', padding: '0.5rem', minWidth: 160 }}>
      <option value="">All Genres</option>
      {genres.filter(g => g).map((genre) => (
        <option key={genre} value={genre}>{genre}</option>
      ))}
    </select>
  </div>
);

export default GenreFilter;
