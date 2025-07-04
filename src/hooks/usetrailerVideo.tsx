import { useEffect, useState } from "react";
import { API_OPTIONS } from "../Utils/constants";
import { addTraileVideo } from "../Utils/movieSlice";
import { useDispatch } from "react-redux";

//fetch trailer video $$ updating the store with trailer video data

const useTrailerVideo = (movieId: any) => {
  const dispatch = useDispatch();

  const getMovieClip = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json, "videos ss");
    const filterDatas = json.results.filter(
      (video: any) => video.type === "Trailer"
    );
    const trailer = filterDatas.length ? filterDatas[0] : json.results[0];
    console.log(trailer, "this is trailer");
    dispatch(addTraileVideo(trailer));
  };
  useEffect(() => {
    getMovieClip();
  }, []);
};

export default useTrailerVideo;
