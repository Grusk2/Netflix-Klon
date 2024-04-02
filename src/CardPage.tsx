// MovieCards.tsx

import React from "react";
import { Button } from "react-bootstrap";
import "./CardPage.css"; // Import CSS file

interface Movie {
  title: string;
  year: number;
  rating: string;
  actors: string[];
  genre: string;
  synopsis: string;
  thumbnail: string;
  isTrending?: boolean;
}

interface MovieCardsProps {
  movies: Movie[];
}

const MovieCards: React.FC<MovieCardsProps> = ({ movies }) => {
  return (
    <div className="movie-cards-container">
      {movies.map((movie, index) => (
        <div key={index} className="movie-card">
          <img src={movie.thumbnail} alt={movie.title} />
          <div className="movie-card-content">
            <div className="movie-title">{movie.title}</div>
            <div className="movie-details">
              <div className="movie-details-item">
                <strong>Year:</strong> {movie.year}
              </div>
              <div className="movie-details-item">
                <strong>Rating:</strong> {movie.rating}
              </div>
              <div className="movie-details-item">
                <strong>Genre:</strong> {movie.genre}
              </div>
              <div className="movie-details-item">
                <strong>Actors:</strong> {movie.actors.join(", ")}
              </div>
              <div className="movie-details-item">
                <strong>Synopsis:</strong> {movie.synopsis}
              </div>
            </div>
            <Button variant="primary">More Info</Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieCards;
