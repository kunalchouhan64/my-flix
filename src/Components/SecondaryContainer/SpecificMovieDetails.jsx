import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { API_OPTIONS, IMAGE_CDN_URL } from '../../../utils/contant';
import { useDispatch } from 'react-redux';
import { addFavoriteMovies } from '../../../utils/Slices/favoriteMovies';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SpecificMovieDetails = () => {
  const dispatch = useDispatch()
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  const notify = () => toast.success(`"${movieDetails.title}" Movie, Added To Your Favorite Movies..`);
  const HandleAddFavorite = (moviekidetails) => {
    dispatch(addFavoriteMovies(moviekidetails))
    notify()
  }
  useEffect(() => {
    // Fetch movie details using the movieId
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}`, API_OPTIONS);
        const data = await response.json();
        setMovieDetails(data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  const posterpath = movieDetails?.poster_path

  // console.log(movieDetails);

  if (!movieDetails) {
    return <div className='h-screen w-full bg-black flex justify-center items-center text-white font-Raleway text-xl'>Loading...</div>;
  }

  return (
    <>
      <ToastContainer position='top-center' />
      <section class="text-gray-400 bg-gray-900 body-font overflow-hidden py-10">
        <div className='flex items-center md:flex-row flex-col-reverse gap-5 md:gap-0'>
          <div>
            <h2 className='md:px-20 text-white font-Raleway'> <span className='text-red-600 font-bold'> Movie Details For -</span>  {movieDetails.title}</h2>

          </div>
          <div className='space-x-3'>
            <Link to='/browse' className='border border-red-600 text-white font-Raleway p-2 rounded-lg text-xs md:text-base hover:bg-red-600 hover:text-white transition-all duration-300 ease-linear text-center'>Back To Browse Page</Link>
            <Link to='/favoratemovies' className='border border-red-600 text-white font-Raleway p-2 rounded-lg text-xs md:text-base hover:bg-red-600 hover:text-white transition-all duration-300 ease-linear text-center'>Go To Favorate Movies</Link>
          </div>

        </div>
        <div class="container px-5 md:py-24 py-10 mx-auto">
          <div class="lg:w-4/5 mx-auto flex flex-wrap-reverse md:gap-10 px-3 md:px-0">
            <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h2 class="text-sm title-font text-gray-300 tracking-widest pb-2">MOVIE NAME</h2>
              <h1 class=" text-xl md:text-3xl title-font font-medium mb-4 font-Raleway text-red-600">{movieDetails.title}</h1>
              <div class="flex mb-4">
                <a class="flex-grow text-white font-Raleway border-b-2 border-red-500 py-2 text-lg px-1">Movie Details</a>
              </div>
              <p class="leading-relaxed mb-4 font-Raleway text-white md:text-base text-sm">{movieDetails.overview}</p>
              <div class="flex border-t border-gray-400 py-3">
                <span class="text-white font-Raleway"> <span className='text-red-600'>Release Date - </span> {movieDetails.release_date}</span>
                <span class="ml-auto text-white font-Raleway"> <span className='text-red-600'>Revenue -</span> {movieDetails.revenue}</span>
              </div>
              <div class="flex border-t border-gray-400 py-3">
                <span class="text-white font-Raleway"> <span className='text-red-600'>  Rating -</span> </span>
                <span class="ml-auto text-white">{Math.floor(movieDetails.vote_average)}⭐</span>
              </div>
              <div class="flex border-t border-b mb-6 border-gray-400 py-3">
                <span class="text-white font-Raleway"> <span className='text-red-600'>  Original Language -</span> </span>
                <span class="ml-auto text-white capitalize">{movieDetails.original_language}</span>
              </div>
              <div>
                <button onClick={() => HandleAddFavorite(movieDetails)} className='border border-red-600 text-white font-Raleway p-2 rounded-lg text-xs md:text-sm hover:bg-red-600 hover:text-white transition-all duration-300 ease-linear text-center'>Add To Favorite Movies</button>
              </div>
            </div>
            <img alt="ecommerce" class="lg:w-1/3 w-full h-auto object-cover object-center rounded-2xl hover:scale-95 transition-all duration-300 ease-linear cursor-pointer hover:border-2 hover:border-red-600" src={IMAGE_CDN_URL + posterpath} />
          </div>
        </div>
      </section>
    </>
  )
}

export default SpecificMovieDetails
