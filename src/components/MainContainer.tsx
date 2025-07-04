import { useSelector } from "react-redux";
import type { RootState } from "../Utils/appStore";
import VideoBg from "./videoBg";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector(
    (store: RootState) => store.movies?.nowPlayingMovies);
if(!movies)return ;
    const mainMovie=movies?.[0];
   const {original_title,overview,id}=mainMovie

  return( <div>
    <VideoBg movieId={id}/>
    <VideoTitle title={original_title} overview={overview}/>
  </div>);
};

export default MainContainer;
