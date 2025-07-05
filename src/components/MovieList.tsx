import MovieCard from "./MovieCard";
import type { Movie } from "../types/types"; // 👈

type MovieListProps = {
  title: string;
  movies: Movie[]; 
};

const MovieList = ({ title, movies }: MovieListProps) => {

  return (
    <div className="p-6">
        <h1 className="text-white text-2xl px-4 py-2 font-bold">{title}</h1>

      <div className="flex overflow-x-auto scrollbar-hide space-x-4 px-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} posterPath={movie.poster_path} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
