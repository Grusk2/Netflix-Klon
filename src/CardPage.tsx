import React from "react";
import { Link } from "react-router-dom"; // Import Link
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
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

const CardPage: React.FC<MovieCardsProps> = ({ movies }) => {
  // Filter trending movies
  const trendingMovies = movies.filter((movie) => movie.isTrending);

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
          <h2>Trending</h2>
          <Slider {...carouselSettings}>
            {trendingMovies.map((movie, index) => (
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
