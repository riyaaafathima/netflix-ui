import type { RootState } from "../Utils/appStore";
import { useSelector } from "react-redux";
import useTrailerVideo from '../hooks/usetrailerVideo'

function VideoBg({ movieId }: any) {
  const trailervideo = useSelector(
  (store: RootState) => store.movies?.trailervideo);
 useTrailerVideo(movieId);
  return (
    <iframe
      className="w-full h-full object-cover"
      src={`https://www.youtube.com/embed/${trailervideo?.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailervideo?.key}`}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
}

export default VideoBg;
