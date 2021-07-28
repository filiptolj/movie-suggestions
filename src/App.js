import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Movies from "./Movies";

const api_url = "https://api.themoviedb.org/3/";
const api_key = "04c35731a5ee918f014970082a0088b1";
const api_popular = `${api_url}discover/movie?sort_by=popularity.desc&api_key=${api_key}&page=1`;

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const removeMovie = (id) => {
    const newMovies = movies.filter((movie) => movie.id !== id);
    setMovies(newMovies);
  };

  const fetchMovies = async () => {
    setLoading(true);
    try {
      const response = await fetch(api_popular);
      const respData = await response.json();
      const movies = respData.results;
      setLoading(false);
      setMovies(movies);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchMovies();
  }, []);
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (movies.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no movies left</h2>
          <button className="btn" onClick={() => fetchMovies()}>
            refresh
          </button>
        </div>
      </main>
    );
  }
  return (
    <main>
      <Movies movies={movies} removeMovie={removeMovie} />
    </main>
  );
}

export default App;
