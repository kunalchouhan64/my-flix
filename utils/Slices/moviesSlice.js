import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlayingMovies: null,
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovies: null,
        trailerVideo: null
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload
        },
        addpopularMovies: (state, action) => {
            state.popularMovies = action.payload
        },
        addtopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload
        },
        addupcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload
        },
    }
})


export const { addNowPlayingMovies, addTrailerVideo, addpopularMovies, addtopRatedMovies, addupcomingMovies } = moviesSlice.actions

export default moviesSlice.reducer