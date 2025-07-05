import { useSelector } from "react-redux"
import MovieList from "./MovieList"
import type { RootState } from "../Utils/appStore"
const SecondaryContainer=()=>{
    const movies=useSelector((store:RootState)=>store.movies)
return (
  <div>
    <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
    <MovieList title="Trending" movies={movies.nowTrendingMovies} />
    <MovieList title="Popular" movies={movies.nowPopularMovies} />
    <MovieList title="Upcoming Movies" movies={movies.nowUpcomingMovies} />
  </div>
);

}

export default SecondaryContainer