import { createSlice } from "@reduxjs/toolkit";

export interface UserState {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
}

const initialState: UserState | null = null;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => action.payload,
    removeUser: () => null,
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
