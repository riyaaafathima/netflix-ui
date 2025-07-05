import { useSelector } from "react-redux";
import type { RootState } from "../Utils/appStore";
import VideoBg from "./VideoBg";
import VideoTitle from "./VideoTitle";
import SecondaryContainer from "./SecondaryContainer";

const MainContainer = () => {
  const movies = useSelector(
    (store: RootState) => store.movies?.nowPlayingMovies);
  if (!movies || movies.length === 0) return null;
  const mainMovie = movies[0];


  const { original_title, overview, id } = mainMovie;

  
  return (
    <div className="flex flex-col">
      <div className="relative h-[100vh]">
        <VideoBg movieId={id} />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black via-transparent to-transparent z-10">
          <VideoTitle title={original_title} overview={overview} />
        </div>
      </div>

      <div className="bg-black mb-40 z-40 relative">
        <SecondaryContainer />
      </div>
    </div>
  );
};

export default MainContainer;
