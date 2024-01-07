import React from 'react'
import { IMAGE_CDN_URL } from '../../utils/contant'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { removeFavoriteMovie } from '../../utils/Slices/favoriteMovies';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FavoriteMovies = () => {
    const dispatch = useDispatch()
    const notify = () => toast.success("Movie Removed Successfully...!!");
    const HandleAddFavorite = (moviekidetails) => {
        dispatch(removeFavoriteMovie(moviekidetails))
        notify()
    }
    const FavoriteMovies = useSelector((store) => store.favoriteMovies?.favoriteMovies);

   
    return (
        <>
            {
                FavoriteMovies.length === 0 ? <div className='h-screen bg-black flex justify-center space-y-5 items-center py-20 flex-col'>

                    <Link to='/browse' className='border border-red-600 text-white font-Raleway p-2 rounded-lg text-xs md:text-base hover:bg-red-600 hover:text-white transition-all duration-300 ease-linear text-center'>Back To Browse Page</Link>

                    <div className='text-white  font-Raleway text-center px-4'>Please Add Some Movies To Your Favorite Movies,So That Can Show Here</div>

                </div> : <section className="text-gray-400 bg-gray-900 body-font py-10 px-5 md:py-10 md:px-12">
                    <div className='flex w-full justify-center md:justify-start items-center'>
                        <Link to='/browse' className='border border-red-600 text-white font-Raleway p-2 rounded-lg text-xs md:text-base hover:bg-red-600 hover:text-white transition-all duration-300 ease-linear text-center'>Back To Browse Page</Link>
                    </div>
                    <div className="container py-10 mx-auto">
                        <div className="flex flex-wrap -m-4">

                            {
                                FavoriteMovies.map((movie) => (
                                    <div key={movie.id} className="p-4 md:w-1/3">
                                        <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                                            <img className="lg:h-60 md:h-36 w-full object-cover object-center" src={IMAGE_CDN_URL + movie.poster_path} alt="blog" />
                                            <div className="p-6">
                                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">MOVIE NAME</h2>
                                                <h1 className="title-font text-lg font-medium text-white mb-3">{movie.original_title}</h1>
                                                <p className="leading-relaxed mb-3">{movie.overview}</p>
                                                <button onClick={() => HandleAddFavorite(movie.id)} className='font-Raleway bg-red-600 text-white p-2 text-sm rounded-lg'>Remove From Favorite</button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }





                        </div>
                    </div>
                </section>
            }
            <ToastContainer position='top-center' />


        </>
    )
}

export default FavoriteMovies
