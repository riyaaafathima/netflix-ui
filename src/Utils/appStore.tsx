import {configureStore} from '@reduxjs/toolkit';
import  useReducer  from './userSlice';


const appStore=configureStore(
    {
        reducer:{
            user:useReducer,
        }
    }
)

export default appStore
export type RootState = ReturnType<typeof appStore.getState>;