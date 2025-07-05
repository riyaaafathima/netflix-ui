import type {Movie} from '../types/types';
import type {PayloadAction} from '@reduxjs/toolkit'
import  {createSlice } from "@reduxjs/toolkit";

export interface WatchListState{
    movies:Movie[];
}

const initialState :WatchListState={
movies:[],
}

const watchListSlice=createSlice({
name:'watchList',
initialState,
reducers:{
   addMovies: (state, action: PayloadAction<Movie>) => {
      state.movies.push(action.payload);
   },
   removeMovies:(state,action:PayloadAction<number>)=>{
    state.movies=state.movies.filter(item=>item.id !==action.payload);
   },
   clearCart:(state)=>{
    state.movies.length=0
   }
}
})

export const{addMovies,removeMovies}=watchListSlice.actions
export default watchListSlice.reducer;