import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Slices/userSlice";
import moviesSlice from "../Slices/moviesSlice";
import favoriteMovies from "../Slices/favoriteMovies";

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesSlice,
        favoriteMovies: favoriteMovies,

    }
})

export default appStore