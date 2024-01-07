import React, { useState } from 'react'
import { IMAGE_CDN_URL } from '../../../utils/contant'
import { useNavigate } from 'react-router-dom'

const MovieCard = ({ posterpath, movieid }) => {
  const [ishoverd, SetIsHoverd] = useState(false)
  const navigate = useNavigate()
  const HandleClick = (id) => {
    navigate(`/movie-details/${id}`)
  }
  return (
    <>
      <div className='relative w-full justify-center items-center flex transition-transform duration-300 ease-linear' onMouseEnter={() => SetIsHoverd(true)} onMouseLeave={() => SetIsHoverd(false)} onClick={() => HandleClick(movieid)}>
        <img className='md:w-[70%] rounded-xl h-auto transition-transform ease-linear duration-300' src={IMAGE_CDN_URL + posterpath} alt="Movie Card Image" />
        {
          ishoverd && <div className='absolute h-full w-full bg-black bg-opacity-70 top-0 left-0 text-white text-center flex justify-center items-center transition-transform ease-linear duration-300 cursor-pointer'><p className='font-Raleway text-sm md:text-base'>View More Details</p></div>
        }

      </div>

    </>
  )
}

export default MovieCard
