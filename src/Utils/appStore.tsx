import {configureStore} from '@reduxjs/toolkit';
import  useReducer  from './userSlice';
import moviesReducer from './movieSlice';
import gptReducer from './gptSlice'
import watchListReducer from "./watchListSlice"; 

const appStore=configureStore(
    {
        reducer:{
            user:useReducer,
            movies:moviesReducer,
            gpt:gptReducer,
            watchList:watchListReducer
        }
    }
)

export default appStore
export type RootState = ReturnType<typeof appStore.getState>;