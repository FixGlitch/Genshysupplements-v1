import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user_detail: {},
    users: [],
    currentPage: "",
    totalPages: "",
    totalResults: "",
};


export const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        setUser: (state, action) => {
            state.user_detail = action.payload
        },
        setAllUsers: (state, action) => {
            state.totalPages = action.payload.totalPages;
            state.users = action.payload.users;
            state.currentPage = action.payload.currentPage;
            state.totalResults = action.payload.totalResults;
        },
        updateUserData: (state, action) => {
            if (state.users) {
                state.users = { ...state.users, ...action.payload };
            }
        },
    },
});

export const {
    setAllUsers,
    updateUserData,
    setUser,
} = userSlice.actions;

export default userSlice.reducer;
