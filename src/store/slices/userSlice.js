import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  nickname: null,
  email: null,
  emailActivated: null,
  height: null,
  heightMeasure: null,
  weight: null,
  weightMeasure: null,
  distanceMeasure: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.id = action.payload.id;
      state.nickname = action.payload.nickname;
      state.email = action.payload.email;
      state.emailActivated = action.payload.emailActivated;
      state.height = action.payload.height;
      state.heightMeasure = action.payload.heightMeasure;
      state.weight = action.payload.weight;
      state.weightMeasure = action.payload.weightMeasure;
      state.distanceMeasure = action.payload.distanceMeasure;
    },
    removeUser(state) {
      state.id = null;
      state.nickname = null;
      state.email = null;
      state.emailActivated = null;
      state.height = null;
      state.heightMeasure = null;
      state.weight = null;
      state.weightMeasure = null;
      state.distanceMeasure = null;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
