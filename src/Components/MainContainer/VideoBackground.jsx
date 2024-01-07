import React from 'react'
import useMovieTrailer from '../../hooks/useMovieTrailer';
import { useSelector } from 'react-redux';

const VideoBackground = ({ movieid }) => {

  const TrailerKey = useSelector((store) => store.movies?.trailerVideo?.key)

  // We Have Created Custom Hook for fetching and storing the Movie Trailer, Rather Than MessUp Here 
  useMovieTrailer(movieid)
  return (

    
    <>
      <iframe className='h-full w-full aspect-[4/3] md:aspect-video object-cover object-center' src={"https://www.youtube.com/embed/" + TrailerKey + "?autoplay=1&mute=1&controls=0&showinfo=0"} allowFullScreen></iframe>

    </>
  )
}

export default VideoBackground
