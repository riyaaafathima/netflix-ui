import { useSelector } from "react-redux";
import { IMG_CDN_URL } from "../Utils/constants";
import type { RootState } from "../Utils/appStore";
import { APP_BG } from "../Utils/constants";
import { useNavigate } from "react-router-dom";

const WatchlistPage = () => {
  const watchlist = useSelector((store: RootState) => store.watchList.movies);
  const navigate = useNavigate();

  if (watchlist.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="absolute inset-0 -z-10">
          <img className="w-full h-full object-cover" src={APP_BG} alt="bg" />
          <div className="absolute inset-0 bg-black opacity-60" />
        </div>
        <h1 className="text-red-500 text-center font-bold text-5xl mt-10">
          Your watchlist is empty
        </h1>
        <button
          className="p-2 px-5 m-6 rounded-lg bg-red-700 hover:bg-red-500 transition-discrete cursor-pointer"
          onClick={() => navigate("/browse")}
        >
          Add your Movies🍿
        </button>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="absolute inset-0 -z-10">
        <img className="w-full h-full object-cover" src={APP_BG} alt="bg" />
        <div className="absolute inset-0 bg-black opacity-60" />
      </div>
      <h1 className="text-5xl text-red-700 mb-4 ">YOU WATCHLIST 👁️</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-20">
        {watchlist.map((movie) => (
          <img
            key={movie.id}
            src={IMG_CDN_URL + movie.poster_path}
            alt={movie.original_title}
            className="rounded-lg hover:scale-105 transition"
          />
        ))}
      </div>
    </div>
  );
};

export default WatchlistPage;
