import React from 'react'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground'
import Header from '../Header/Header'

const MainContainer = () => {
  // 🌟Selecting The Movies From The Store 
  const movies = useSelector((store) => store.movies?.nowPlayingMovies)
  // Returning As It Is, if movies was not present yet 
  if (!movies) return;

  // 🌟Getting Only The First Movie From All Movies 
  const mainmovie = movies[0]
  // console.log(movies);

  // 🌟We Are De-Strucutring The Thing We Want From Movie 
  const { original_title, overview, vote_average, release_date, id
  } = mainmovie
  return (
    <>

      <Header />
       <VideoBackground movieid={id} />
      {/*🌟We Are Sending Props To Our VideoTitle Component To Get And Show The Things */}
      <VideoTitle  movieid={id} title={original_title} release_date={release_date} vote_average={vote_average} overview={overview} />
     


    </>
  )
}

export default MainContainer
