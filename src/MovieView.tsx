import React from "react";
import { useParams } from "react-router-dom";
import "./MovieView.css";

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

interface MovieViewProps {
  movies: Movie[];
}

const MovieView: React.FC<MovieViewProps> = ({ movies }) => {
  const { title } = useParams<{ title: string }>();
  const movie = movies.find((movie) => movie.title === title);

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className="movie-container">
      <h2 className="movie-title">{movie.title}</h2>
      <img className="movie-img" src={movie.thumbnail} alt={movie.title} />
      <div className="movie-content">
        <p>Year: {movie.year}</p>
        <p>Rating: {movie.rating}</p>
        <p>Actors: {movie.actors.join(", ")}</p>
        <p>Synopsis: {movie.synopsis}</p>
      </div>
    </div>
  );
};

export default MovieView;
