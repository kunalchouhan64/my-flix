import React from 'react'
import MovieCard from './MovieCard';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const MovieList = ({ title, movies }) => {
  return (
    <>
      <div className='w-full md:px-16 md:pb-14 px-4 h-auto space-y-10 md:space-y-4  bg-black md:py-0'>
        <h2 className='font-Raleway md:text-2xl font-[500] text-white pt-5 md:pt-0'>{title}</h2>
        
        <Swiper className='rounded-xl py-5 px-5 shadow-sm  shadow-red-500'
          spaceBetween={0}
          slidesPerView={5}
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 3,
              spaceBetween: 30
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 5,
              spaceBetween: 0
            }
          }}
          navigation >
          {
            movies?.map((movie) => (
              <SwiperSlide key={movie.id}>
                <MovieCard movieid={movie.id} posterpath={movie.poster_path} />
              </SwiperSlide>
            ))
          }


        </Swiper>


      </div>
    </>
  )
}

export default MovieList
