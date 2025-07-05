import { API_OPTIONS } from "../Utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowTrendingMovies } from "../Utils/movieSlice";
const useNowTrendingMovies = () => {
  //fetch data from tmdb api and update the store
  const dispatch = useDispatch();
  const getNowTrendingMovies = async () => {
    const pageToFetch = [1, 2, 3];
    const data = await Promise.all(
      pageToFetch.map((page) =>
        fetch(
          `https://api.themoviedb.org/3/movie/top_rated?page=${page}`,
          API_OPTIONS
        )
      )
    );

    const json = await Promise.all(data.map((res) => res.json()));
    const allMovies = json.flatMap((data) => data.results);

    dispatch(addNowTrendingMovies(allMovies));
  };

  useEffect(() => {
    getNowTrendingMovies();
  }, []);
};
export default useNowTrendingMovies;
