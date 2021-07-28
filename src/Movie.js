import React, { useState } from "react";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";

const Movie = ({
  id,
  poster_path,
  title,
  vote_average,
  overview,
  removeMovie,
}) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="single-movie">
      <img src={IMGPATH + poster_path} alt={title} />
      <footer>
        <div className="movie-info">
          <h4>{title}</h4>
          <h4 className="movie-vote">{vote_average}</h4>
        </div>
        <p>
          {overview.length > 200
            ? readMore
              ? overview
              : `${overview.substring(0, 200)}...`
            : overview}
          {overview.length > 200 && (
            <button onClick={() => setReadMore(!readMore)}>
              {readMore ? "show less" : "  read more"}
            </button>
          )}
        </p>
        <button className="delete-btn" onClick={() => removeMovie(id)}>
          not interested
        </button>
      </footer>
    </article>
  );
};

export default Movie;
