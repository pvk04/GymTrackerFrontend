import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  email: null,
  emailActivated: null,
  isAuth: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.emailActivated = action.payload.emailActivated;
      state.isAuth = true;
    },
    removeUser(state) {
      state.id = null;
      state.email = null;
      state.emailActivated = null;
      state.isAuth = false;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
