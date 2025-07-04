import { API_OPTIONS } from "../Utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../Utils/movieSlice";
const useNowPlayingMovies = () => {
  //fetch data from tmdb api and update the store
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const pageToFetch = [1, 2, 3];
    const data = await Promise.all(
      pageToFetch.map((page) =>
        fetch(
          `https://api.themoviedb.org/3/movie/now_playing?page=${page}`,
          API_OPTIONS
        )
      )
    );

    const json = await Promise.all(data.map((res) => res.json()));
    const allMovies = json.flatMap((data) => data.results);

    dispatch(addNowPlayingMovies(allMovies));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};
export default useNowPlayingMovies;
