import { API_OPTIONS } from "../Utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowUpcomingMovies } from "../Utils/movieSlice";
const useNowUpcomingMovies = () => {
  //fetch data from tmdb api and update the store
  const dispatch = useDispatch();
  const getNowUpcomingMovies = async () => {
    const pageToFetch = [1, 2, 3];
    const data = await Promise.all(
      pageToFetch.map((page) =>
        fetch(
          `https://api.themoviedb.org/3/movie/upcoming?page=${page}`,
          API_OPTIONS
        )
      )
    );

    const json = await Promise.all(data.map((res) => res.json()));
    const allMovies = json.flatMap((data) => data.results);

    dispatch(addNowUpcomingMovies(allMovies));
  };

  useEffect(() => {
    getNowUpcomingMovies();
  }, []);
};
export default useNowUpcomingMovies;
