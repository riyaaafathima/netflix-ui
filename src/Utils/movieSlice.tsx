import type {  PayloadAction } from "@reduxjs/toolkit";
import  {createSlice } from "@reduxjs/toolkit";
import type { Movie } from '../types/types';
import type { Video } from '../types/types';

type MovieState = {
  nowPlayingMovies: Movie[];
  nowPopularMovies: Movie[];
  nowTrendingMovies: Movie[];
  nowUpcomingMovies: Movie[];
  trailervideo: Video | null;
};

const initialState: MovieState = {
  nowPlayingMovies: [],
  nowPopularMovies: [],
  nowTrendingMovies: [],
  nowUpcomingMovies: [],
  trailervideo: null,
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addNowPlayingMovies: (state, action: PayloadAction<Movie[]>) => {
      state.nowPlayingMovies = action.payload;
    },
    addNowPopularMovies: (state, action: PayloadAction<Movie[]>) => {
      state.nowPopularMovies = action.payload;
    },
    addNowTrendingMovies: (state, action: PayloadAction<Movie[]>) => {
      state.nowTrendingMovies = action.payload;
    },
    addNowUpcomingMovies: (state, action: PayloadAction<Movie[]>) => {
      state.nowUpcomingMovies = action.payload;
    },
    addTraileVideo: (state, action: PayloadAction<Video>) => {
      state.trailervideo = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addTraileVideo,addNowPopularMovies,addNowTrendingMovies,addNowUpcomingMovies } = movieSlice.actions;

export default movieSlice.reducer;
