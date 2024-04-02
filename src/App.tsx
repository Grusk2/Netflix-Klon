import React from "react";
import moviesData from "../movies.json"; // Assuming movies.json is in the same directory as main.tsx
import MovieCards from "./CardPage";

const Main: React.FC = () => {
  return (
    <div>
      <h1>Movies</h1>
      <MovieCards movies={moviesData} />
    </div>
  );
};

export default Main;
