import React from 'react';
import logo from '/assets/Images/HeroImages/logo.png';
import { signOut } from "firebase/auth";
import { auth } from '../../../utils/firebase';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
  const username = useSelector((appStore) => appStore.user.displayName);
  const userphotourl = useSelector((appStore) => appStore.user.photoURL);

  // Login For the SignOut 
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <>
      <div className='w-full flex justify-between items-center md:px-10 bg-black shadow-xl pointer-events-auto'>
        <div className='flex justify-center items-center space-x-3 md:space-x-5'>
          <img className='md:h-16 h-9 left-10 cursor-pointer' src={logo} alt="" />
          <Link to='/favoratemovies' className='text-white font-Raleway p-2 border-red-600 border cursor-pointer text-xs md:text-base'>Favorate Movies</Link>
        </div>
        <div className='flex items-center justify-center space-x-5 text-white'>

          <div className='text-center py-2   flex-col justify-center items-center relative'>
            <div className="opacity-100 bg-gray-800 text-white text-xs md:text-sm rounded absolute top-12 left-1/2 transform -translate-x-1/2 mt-2 font-Raleway capitalize z-10">
              Welcome {username}
            </div>
            <img className='h-12 w-12 rounded-full' src={userphotourl} alt="" />
          </div>
          <button onClick={handleSignOut} className='text-white hover:text-red-600 hover:font-semibold transition-all duration-300 ease-linear cursor-pointer'>
            <i onClick={handleSignOut} className="fa-solid fa-right-from-bracket fa-xl" style={{ color: "red" }}></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
