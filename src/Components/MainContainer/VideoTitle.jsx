import React from 'react'
import { useNavigate } from 'react-router-dom'

// 🌟We Are Getting Props from Parent Component Called MainContainer 
const VideoTitle = ({ movieid, title, overview, vote_average, release_date }) => {
    const navigate = useNavigate()

    const HandleClick = () => {

        navigate(`/movie-details/${movieid}`)
    }
    return (

        <>

            <div className='md:absolute md:top-5 overflow-hidden md:bg-opacity-0 bg-black md:bg-gradient-to-t md:from-[#000000] md:via-[#0000009a] md:to-[#00000009] flex flex-col md:justify-end md:items-start px-5 min-h-[47vh] md:pt-0 md:px-20 md:pb-28 text-white md:h-[120vh] w-full z-50'>
                <div className='space-y-3'>
                    <h2 className='font-Raleway md:text-4xl font-semibold'>{title}</h2>

                    <p className='font-Raleway text-sm md:text-base md:w-[60%]'>{overview}</p>
                    <div className='space-x-4'>
                        <span className='font-Raleway font-[500] text-sm md:text-base'>Rating:  {Math.floor(vote_average)}/10⭐</span>
                        <span className='font-Raleway font-[500]  text-sm md:text-base'>Release Date : {release_date}</span>
                    </div>
                </div>
                <div className='flex justify-start md:py-6 py-4 items-center space-x-8'>
                    <button onClick={HandleClick} className='md:py-3 md:px-6 py-2 px-4 border font-Raleway rounded-lg  cursor-pointer space-x-1 bg-white text-xs md:text-sm transition-all text-black font-[500]'><span><i class="fa-solid fa-play" style={{ color: 'black' }}></i></span> <span> Play Now</span></button>
                    <button onClick={HandleClick} className='md:py-3 md:px-8 py-2 px-4  text-xs md:text-sm border border-white rounded-lg font-Raleway  text-white bg-gray-300 bg-opacity-10'> <span><i className="fa-solid fa-circle-info" style={{ color: 'white' }}></i></span> <span> More Info</span></button>
                </div>
            </div>
        </>
    )
}

export default VideoTitle
