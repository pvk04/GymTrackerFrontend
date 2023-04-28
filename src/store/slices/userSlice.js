import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: null,
    nickname: null,
    email: null,
    emailActivated: null
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser(state, action) {
            state.id = action.payload.id;
            state.nickname = action.payload.nickname;
            state.email = action.payload.email;
            state.emailActivated = action.payload.emailActivated;
        },
        removeUser(state) {
            state.id = null;
            state.nickname = null;
            state.email = null;
            state.emailActivated = null;
        }
    },
});

export const {setUser, removeUser} = userSlice.actions;

export default userSlice.reducer;