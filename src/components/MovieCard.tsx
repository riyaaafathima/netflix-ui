import { useDispatch, useSelector } from "react-redux";
import { IMG_CDN_URL } from "../Utils/constants";
import { addMovies, removeMovies } from "../Utils/watchListSlice";
import type { Movie } from "../types/types";
import type { RootState } from "../Utils/appStore";

function MovieCard({ movie }: { movie: Movie }) {
  const dispatch = useDispatch();
  const watchlist = useSelector((store: RootState) => store.watchList.movies);

  const isMovieAdded = watchlist.some((item) => item.id === movie.id);

  const handleToggleWatchlist = () => {
    if (isMovieAdded) {
      dispatch(removeMovies(movie.id));
    } else {
      dispatch(addMovies(movie));
    }
  };

  return (
    <div className="min-w-[160px] transition-transform transform hover:scale-105 relative group">
      <img
        className="rounded-md"
        alt={movie.original_title}
        src={IMG_CDN_URL + movie.poster_path}
      />

      <button
        onClick={handleToggleWatchlist}
        className="absolute bottom-2 right-2 bg-black/70 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition"
      >
        {isMovieAdded ? "Remove" : "+ Watchlist"}
      </button>
    </div>
  );
}

export default MovieCard;
