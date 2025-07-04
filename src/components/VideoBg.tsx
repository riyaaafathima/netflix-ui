import type { RootState } from "../Utils/appStore";
import { useSelector } from "react-redux";
import useTrailerVideo from '../hooks/usetrailerVideo'
function VideoBg({ movieId }: any) {
  const trailervideo = useSelector(
  (store: RootState) => store.movies?.trailervideo);
 useTrailerVideo(movieId);
 return (
  <div className="relative w-full">
    <iframe
      className="w-full aspect-video"
      src={`https://www.youtube.com/embed/${trailervideo?.key}?autoplay=1&mute=1&controls=0&loop=1`}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  </div>
);
}

export default VideoBg;
