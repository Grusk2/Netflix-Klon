import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import moviesData, { Movie } from "../movies.json"; // Import the Movie type
import "./App.css";
import MovieCards from "./CardPage";
import MovieView from "./MovieView"; // Import the MovieView component
import SearchBar from "./SearchBar"; // Import the SearchBar component

const Main: React.FC = () => {
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>(moviesData);

  const handleSearch = (filteredMovies: Movie[]) => {
    setFilteredMovies(filteredMovies);
  };

  return (
    <Router>
      <div>
        <header className="Header">
          <h1>Logo</h1>
          {/* Integrate the SearchBar component */}
          <SearchBar movies={moviesData} onSearch={handleSearch} />
        </header>
        <Routes>
          {/* Render MovieCards with filteredMovies instead of moviesData */}
          <Route path="/" element={<MovieCards movies={filteredMovies} />} />
          <Route
            path="/movie/:title"
            element={<MovieView movies={moviesData} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default Main;
