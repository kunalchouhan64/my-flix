import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Login from './Components/Hero/Login'
import Browse from './Components/Browse'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/Slices/userSlice';
import SpecificMovieDetails from './Components/SecondaryContainer/SpecificMovieDetails';
import FavoriteMovies from './Components/FavoriteMovies';

const App = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))
        navigate('browse')
      } else {
        // User is signed out
        dispatch(removeUser())
        navigate('/')
      }

    })


    // Cleanup function
    return () =>
      unsubscribe();

  }, [])



  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/browse' element={<Browse />} />
        <Route path='/favoratemovies' element={<FavoriteMovies />} />
        <Route path="/movie-details/:movieId" element={<SpecificMovieDetails />} />
      </Routes>
    </>
  )
}

export default App
