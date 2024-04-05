import React from "react";
import moviesData from "../movies.json"; // Assuming movies.json is in the same directory as main.tsx
import MovieCards from "./CardPage";
import "./App.css";

const Main: React.FC = () => {
  return (
    <body>
      <header className="Header">
        <h1>Logo</h1>
      </header>
      <div className="MovieCards">
        <MovieCards movies={moviesData} />
      </div>
    </body>
  );
};

export default Main;
