import React from "react";
import Movie from "./Movie";
const Movies = ({ movies, removeMovie }) => {
  {
    console.log(movies);
  }
  return (
    <section>
      <div className="title">
        <h2>{movies.length} popular movies</h2>
        <div className="underline"></div>
      </div>
      <div>
        {movies.map((movie) => {
          return <Movie key={movie.id} {...movie} removeMovie={removeMovie} />;
        })}
      </div>
    </section>
  );
};

export default Movies;
