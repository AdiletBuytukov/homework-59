import React, { useState } from 'react';
import MovieList from "./components/MovieList/MovieList";
import MovieInput from "./components/InputMovie/InputMovie";

const App: React.FC = () => {
  const [movies, setMovies] = useState<{ id: number; text: string }[]>([]);

  const handleAdd = (text: string) => {
    const newMovie = { id: Math.random(), text };
    setMovies((prevMovies) => [...prevMovies, newMovie]);
  };

  const handleDelete = (id: number) => {
    setMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== id));
  };

  const handleEdit = (id: number, newText: string) => {
    setMovies((prevMovies) =>
      prevMovies.map((movie) => (movie.id === id ? { ...movie, text: newText } : movie))
    );
  };

  return (
    <div>
      <h2>Movie Show</h2>
      <MovieInput onAdd={handleAdd} />
      <MovieList movies={movies} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  );
};

export default App;
