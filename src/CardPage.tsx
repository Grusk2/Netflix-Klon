import React from "react";
import { Button, Card } from "react-bootstrap";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Import arrow icons
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

const MovieCards: React.FC<MovieCardsProps> = ({ movies }) => {
  // Group movies by genre
  const moviesByGenre: { [key: string]: Movie[] } = {};
  movies.forEach((movie) => {
    if (!moviesByGenre[movie.genre]) {
      moviesByGenre[movie.genre] = [];
    }
    moviesByGenre[movie.genre].push(movie);
  });

  // Filter trending movies
  const trendingMovies = movies.filter((movie) => movie.isTrending);

  // Settings for react-slick carousel
  const nextArrow = <FaArrowRight />;
  const prevArrow = <FaArrowLeft />;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "60px",
    nextArrow: nextArrow,
    prevArrow: prevArrow,
  };

  return (
    <div className="movie-cards-container">
      {/* Trending movies */}
      {trendingMovies.length > 0 && (
        <div className="genre-container">
          <h2>Trending</h2>
          <Slider {...settings}>
            {trendingMovies.map((movie, index) => (
              <div key={index} className="movie-card">
                <Card>
                  <Card.Img variant="top" src={movie.thumbnail} />
                  <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                    <Button variant="primary">More Info</Button>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </Slider>
        </div>
      )}

      {/* Non-trending movies */}
      {Object.keys(moviesByGenre).map((genre) => (
        <div key={genre} className="genre-container">
          <h2>{genre}</h2>
          <Slider {...settings}>
            {moviesByGenre[genre].map((movie, index) => (
              <div key={index} className="movie-card">
                <Card>
                  <Card.Img variant="top" src={movie.thumbnail} />
                  <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                    <Button variant="primary">More Info</Button>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </Slider>
        </div>
      ))}
    </div>
  );
};

export default MovieCards;
