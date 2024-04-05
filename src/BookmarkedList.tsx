// BookmarkedList.tsx
import React from "react";

interface Props {
  movies: Movie[]; // Assuming you pass bookmarked movies as props
}

const BookmarkedList: React.FC<Props> = ({ movies }) => {
  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.title}>
          <h2>{movie.title}</h2>
          {/* Render other details of the bookmarked movie */}
        </div>
      ))}
    </div>
  );
};

export default BookmarkedList;
