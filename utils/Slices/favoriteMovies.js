import { createSlice } from "@reduxjs/toolkit";

const favoriteMovies = createSlice({
    name: 'favoriteMovies',
    initialState: {
        favoriteMovies: []
    },
    reducers: {
        addFavoriteMovies: (state, action) => {
            // Check if the movie is already in the favorites
            const isDuplicate = state.favoriteMovies.some(movie => movie.id === action.payload.id);

            // If not a duplicate, add it to the favorites
            if (!isDuplicate) {
                state.favoriteMovies.push(action.payload);
            }

        },
        removeFavoriteMovie: (state, action) => {
            const removedMovieId = action.payload;
            console.log("Removing movie with ID:", removedMovieId);

            // Return a new state object without the removed movie
            state.favoriteMovies = state.favoriteMovies.filter(
                (movie) => movie.id !== removedMovieId
            );
        },
    }
})


export const { addFavoriteMovies, removeFavoriteMovie } = favoriteMovies.actions
export default favoriteMovies.reducer