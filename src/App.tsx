import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import moviesData from "../movies.json";
import "./App.css";
import BookmarkedList from "./BookmarkedList";
import MovieCards from "./CardPage";
import MovieView from "./MovieView";
import SearchBar from "./SearchBar";

const Main: React.FC = () => {
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>(moviesData); // State to hold filtered movies
  const [bookmarkedMovies, setBookmarkedMovies] = useState<Movie[]>([]); // State to hold bookmarked movies

  // Function to handle search and update filtered movies
  const handleSearch = (filteredMovies: Movie[]) => {
    setFilteredMovies(filteredMovies);
  };

  // Function to handle adding a movie to bookmarks
  const handleBookmark = (movie: Movie) => {
    setBookmarkedMovies((prevBookmarked) => [...prevBookmarked, movie]);
  };

  return (
    <Router>
      <div>
        <header className="Header">
          <h1>Logo</h1>
          {/* Integrate the SearchBar component */}
          <SearchBar movies={moviesData} onSearch={handleSearch} />
          <h1>Bookmarked</h1>
        </header>
        <div className="main-container">
          <Routes>
            <Route path="/" element={<MovieCards movies={filteredMovies} />} />
            <Route
              path="/movie/:title"
              element={<MovieView movies={moviesData} />}
            />
            <Route
              path="/bookmarked"
              element={<BookmarkedList movies={bookmarkedMovies} />}
            />
          </Routes>
        </div>
        <footer className="main-footer">
          <h1>Logo 2024</h1>
        </footer>
      </div>
    </Router>
  );
};

export default Main;
