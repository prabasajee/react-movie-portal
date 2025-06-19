import React from 'react';

const SearchBar = ({ value, onChange }) => (
  <div style={{ margin: '1rem auto', maxWidth: 400 }}>
    <input
      type="text"
      placeholder="Search movies..."
      value={value}
      onChange={onChange}
      style={{ width: '100%', padding: '0.5rem', fontSize: '1rem' }}
    />
  </div>
);

export default SearchBar;
