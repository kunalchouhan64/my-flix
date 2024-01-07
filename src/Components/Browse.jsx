import React from 'react'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import { useSelector } from 'react-redux';
import MainContainer from './MainContainer/MainContainer';
import SecondaryContainer from './SecondaryContainer/SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpComingMovies from '../hooks/useUpComingMovies';
import Footer from './Hero/Footer';

const Browse = () => {

  //⭐💫 This is our custom Hook For Fetching Movies (now playing movies) List and Storing to into our Store As Well & We Are Calling Here 
  useNowPlayingMovies()
  //⭐💫 This is our custom hooks for fetching movies ( popuar movies only)
  usePopularMovies()
  //⭐💫 This is our custom hooks for fetching movies ( Top reated movies only)
  useTopRatedMovies()
  //⭐💫 This is our custom hooks for fetching movies ( Upcoming movies only)
  useUpComingMovies()




  return (
    <>

      <MainContainer />
      <SecondaryContainer />
      <Footer/>

    </>
  )
}

export default Browse
