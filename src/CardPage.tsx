import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./CardPage.css";

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

const CardPage: React.FC<MovieCardsProps> = ({ movies }) => {
  const [bookmarkedMovies, setBookmarkedMovies] = useState<Movie[]>([]);
  const [trendingMovies, setTrendingMovies] = useState<Movie[]>(
    movies.filter((movie) => movie.isTrending)
  );
  const [nonTrendingMovies, setNonTrendingMovies] = useState<Movie[]>(
    movies.filter((movie) => !movie.isTrending)
  );

  const addToBookmarks = (movie: Movie) => {
    setBookmarkedMovies([...bookmarkedMovies, movie]);
  };

  const carouselSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerPadding: "60px",
  };

  return (
    <div className="movie-cards-container">
      {/* Trending movies */}
      {trendingMovies.length > 0 && (
        <div className="genre-container">
          <h2 className="rubrik">Trending</h2>
          <Slider {...carouselSettings}>
            {trendingMovies.map((movie, index) => (
              <div key={index} className="movie-card">
                <Link to={`/movie/${encodeURIComponent(movie.title)}`}>
                  <img src={movie.thumbnail} alt={movie.title} />
                  <h3>{movie.title}</h3>
                </Link>
                {/* Button to add movie to bookmarks */}
                <button onClick={() => addToBookmarks(movie)}>+</button>
              </div>
            ))}
          </Slider>
        </div>
      )}

      {/* Non-trending movies */}
      {nonTrendingMovies.length > 0 && (
        <div className="genre-container">
          <h2 className="rubrik">Recommended</h2>
          <Slider {...carouselSettings}>
            {nonTrendingMovies.map((movie, index) => (
              <div key={index} className="movie-card">
                <Link to={`/movie/${encodeURIComponent(movie.title)}`}>
                  <img src={movie.thumbnail} alt={movie.title} />
                  <h3>{movie.title}</h3>
                </Link>
                {/* Button to add movie to bookmarks */}
                <button onClick={() => addToBookmarks(movie)}>+</button>
              </div>
            ))}
          </Slider>
        </div>
      )}

      {/* Bookmarked movies */}
      {bookmarkedMovies.length > 0 && (
        <div className="genre-container">
          <h2 className="rubrik">Bookmarked</h2>
          <Slider {...carouselSettings}>
            {bookmarkedMovies.map((movie, index) => (
              <div key={index} className="movie-card">
                <Link to={`/movie/${encodeURIComponent(movie.title)}`}>
                  <img src={movie.thumbnail} alt={movie.title} />
                  <h3>{movie.title}</h3>
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      )}
    </div>
  );
};

export default CardPage;
