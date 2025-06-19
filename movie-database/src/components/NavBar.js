import React from 'react';

const NavBar = ({ onHome, onFavorites, showFavorites }) => (
  <nav style={{ display: 'flex', justifyContent: 'center', gap: 20, background: '#333', color: '#fff', padding: '0.5rem 0' }}>
    <button onClick={onHome} style={{ background: 'none', border: 'none', color: '#fff', fontSize: '1rem', cursor: 'pointer' }}>Home</button>
    <button onClick={onFavorites} style={{ background: showFavorites ? '#444' : 'none', border: 'none', color: '#fff', fontSize: '1rem', cursor: 'pointer' }}>Favorites</button>
  </nav>
);

export default NavBar;
