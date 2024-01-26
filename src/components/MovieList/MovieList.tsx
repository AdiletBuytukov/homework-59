import React from 'react';
import MovieItem from '../AddMovie/AddMovie';

interface MovieListProps {
  movies: { id: number; text: string }[];
  onDelete: (id: number) => void;
  onEdit: (id: number, newText: string) => void;
}

const MovieList: React.FC<MovieListProps> = ({ movies, onDelete, onEdit }) => {
  return (
    <div>
      {movies.map((movie) => (
        <MovieItem
          key={movie.id}
          id={movie.id}
          text={movie.text}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default MovieList;
