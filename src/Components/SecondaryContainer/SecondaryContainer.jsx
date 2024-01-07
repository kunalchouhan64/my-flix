import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
    // Getting the movies from our Redux Toolkit Store 
    const movies = useSelector((appStore) => appStore.movies)
    return movies === null ? 'Some Technical Error, No Worries' : (
        <>
            <div className='h-auto'>
            <div className='w-full bg-black px-5 py-5'>
            
            
            </div>
                <MovieList title={"Now Playing Movies"} movies={movies.nowPlayingMovies} />
                <MovieList title={'Top Rated Movies'} movies={movies.topRatedMovies} />
                <MovieList title={"Popular Movies"} movies={movies.popularMovies} />
                <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
            </div>

        </>
    )
}

export default SecondaryContainer;
