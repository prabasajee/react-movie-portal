import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import GenreFilter from './components/GenreFilter';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import TrendingSection from './components/TrendingSection';
import Footer from './components/Footer';
import './App.css';

const API_KEY = '8daf1fc0';
const DEFAULT_MOVIES = ['Batman', 'Avengers', 'Inception', 'Titanic', 'Matrix'];
const TRENDING_MOVIES = ['Dune', 'Joker', 'Interstellar', 'John Wick', 'Guardians of the Galaxy'];

function App() {
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [trending, setTrending] = useState([]);
  const [genre, setGenre] = useState('');

  // Load favorites from localStorage on mount
  useEffect(() => {
    const favs = localStorage.getItem('favorites');
    if (favs) setFavorites(JSON.parse(favs));
  }, []);

  // Show some movies on home page by default
  useEffect(() => {
    if (!showFavorites && !search && movies.length === 0) {
      (async () => {
        setLoading(true);
        let all = [];
        for (let title of DEFAULT_MOVIES) {
          const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(title)}`);
          const data = await res.json();
          if (data.Response === 'True') {
            all = all.concat(data.Search.slice(0, 2)); // show 2 from each
          }
        }
        setMovies(all);
        setLoading(false);
      })();
    }
  }, [showFavorites, search]);

  // Show trending movies on home page
  useEffect(() => {
    (async () => {
      let all = [];
      for (let title of TRENDING_MOVIES) {
        const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(title)}`);
        const data = await res.json();
        if (data.Response === 'True') {
          all = all.concat(data.Search.slice(0, 1)); // show 1 from each
        }
      }
      setTrending(all);
    })();
  }, []);

  // Save favorites to localStorage when they change
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  // Filter movies by genre
  const filteredMovies = genre
    ? movies.filter((movie) => movie.Genre && movie.Genre.includes(genre))
    : movies;

  const handleSearch = async (e) => {
    setSearch(e.target.value);
    setError('');
    if (e.target.value.length > 2) {
      setLoading(true);
      try {
        const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${e.target.value}`);
        const data = await res.json();
        if (data.Response === 'True') {
          setMovies(data.Search || []);
        } else {
          setMovies([]);
          setError('No movies found.');
        }
      } catch {
        setError('Failed to fetch movies.');
        setMovies([]);
      }
      setLoading(false);
    } else {
      setMovies([]);
    }
  };

  const handleMovieClick = async (movie) => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${movie.imdbID}&plot=full`);
      const data = await res.json();
      setSelectedMovie(data);
    } catch {
      setError('Failed to fetch movie details.');
    }
    setLoading(false);
  };

  const handleBack = () => setSelectedMovie(null);

  const handleAddFavorite = (movie) => {
    if (!favorites.find((fav) => fav.imdbID === movie.imdbID)) {
      setFavorites([...favorites, movie]);
    }
  };

  const handleRemoveFavorite = (movie) => {
    setFavorites(favorites.filter((fav) => fav.imdbID !== movie.imdbID));
  };

  const handleShowFavorites = () => {
    setShowFavorites(true);
    setSelectedMovie(null);
  };

  const handleShowHome = () => {
    setShowFavorites(false);
    setSelectedMovie(null);
  };

  return (
    <div>
      <Header />
      <NavBar onHome={handleShowHome} onFavorites={handleShowFavorites} showFavorites={showFavorites} />
      {!showFavorites && <SearchBar value={search} onChange={handleSearch} />}
      {!showFavorites && <GenreFilter value={genre} onChange={e => setGenre(e.target.value)} />}
      {!showFavorites && !search && !selectedMovie && trending.length > 0 && (
        <TrendingSection movies={trending} onMovieClick={handleMovieClick} />
      )}
      {loading && <div style={{ textAlign: 'center', margin: '2rem' }}>Loading...</div>}
      {error && <div style={{ color: 'red', textAlign: 'center', margin: '1rem' }}>{error}</div>}
      {selectedMovie ? (
        <MovieDetails movie={selectedMovie} onBack={handleBack} />
      ) : showFavorites ? (
        favorites.length === 0 ? (
          <div style={{ textAlign: 'center', margin: '2rem' }}>No favorites yet.</div>
        ) : (
          <MovieList movies={favorites} onMovieClick={handleMovieClick} showAddFavorite={false} onRemoveFavorite={handleRemoveFavorite} showRemoveFavorite={true} />
        )
      ) : (
        <MovieList movies={filteredMovies} onMovieClick={handleMovieClick} onAddFavorite={handleAddFavorite} showAddFavorite={true} />
      )}
      <Footer />
    </div>
  );
}

export default App;
