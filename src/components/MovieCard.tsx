import { IMG_CDN_URL } from "../Utils/constants";

function MovieCard({ posterPath }: any) {
  return (
    <div className="min-w-[160px] transition-transform transform hover:scale-105">
      <img
      className="rounded-md"
       alt="movie card" src={IMG_CDN_URL + posterPath}></img>
    </div>
  );
}

export default MovieCard;
