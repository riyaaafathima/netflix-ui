import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import useNowPopularMovies from "../hooks/useNowPopularMovies";
import useNowTrendingMovies from "../hooks/useNowTrendingMovies";
import useNowUpcomingMovies from "../hooks/useNowUpcomingMovie";
import { useSelector } from "react-redux";
import type { RootState } from "../Utils/appStore";
import GptSearch from "./GptSearch";
const Browse = () => {
  const showGptSearch = useSelector(
    (store: RootState) => store.gpt.showGptSearch
  );
  useNowPlayingMovies();
  useNowPopularMovies();
  useNowTrendingMovies();
  useNowUpcomingMovies();
  return (
    <div>
      <Header />
      {showGptSearch ? <GptSearch /> : <MainContainer />}
      <MainContainer/>
    </div>
  );
};

export default Browse;
