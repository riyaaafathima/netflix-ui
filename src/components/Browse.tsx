import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import useNowPopularMovies from "../hooks/useNowPopularMovies";
import useNowTrendingMovies from "../hooks/useNowTrendingMovies";
import useNowUpcomingMovies from "../hooks/useNowUpcomingMovie";
const Browse = () => {
  useNowPlayingMovies();
  useNowPopularMovies();
  useNowTrendingMovies();
  useNowUpcomingMovies();
  return (
    <div>
      <Header />
      <MainContainer/>
    </div>
  );
};

export default Browse;
