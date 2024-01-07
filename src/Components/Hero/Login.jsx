
import React, { useRef, useState } from 'react';
import logo from '/assets/Images/HeroImages/logo.png';
import { ValidateUserDatails } from '../../../utils/Validation';
import { auth } from '../../../utils/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser } from '../../../utils/Slices/userSlice';
import { UserAvatar } from '../../../utils/contant';

const Login = () => {
    const dispatch = useDispatch()

    // Stroing the Input Fields Value with useRef 
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);


    // 🌟State for setting is loggedIn or other 
    const [isloggedin, setIsLoggedIn] = useState(true);
    const [error, SetError] = useState();

    // 🌟Toggle Click Handler for Asking - the Sign Up / Sign In for user 
    const HandleClickLogin = () => setIsLoggedIn(!isloggedin);


    const HandleClick = (e) => {

        e.preventDefault()
        // 🌟Validating password and email, and if it is not valid...we get the error message as well  
        const message = ValidateUserDatails(email.current.value, password.current.value);
        SetError(message);
        if (message) return; // Returning the user when we got the error while validating the user details. 


        // 🌟Performing the Firebase User Signup and SignIn Operation 
        if (!isloggedin) {
            // SignUp Logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value, photoURL: UserAvatar
                    }).then(() => {
                        // ⭐Profile updated!
                        const { uid, email, displayName, photoURL } = auth.currentUser;
                        dispatch(addUser({ uid, email, displayName, photoURL }))
                    }).catch((error) => {
                        // An error occurred
                        // ...
                    })
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    SetError(errorCode + " " + errorMessage)

                    // ..
                });
        }
        // 🌟This is the sign in logic and its trigger when user signin 
        else {
            // SingIn Logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log(user.email)
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    SetError(errorCode + " " + errorMessage)
                });
        }


    };
    return (
        <div className='hero_bg h-full w-full font-Poppins'>
            <div className='h-full w-full bg-black opacity-50 flex relative'>
            </div>

            <img className=' md:h-24 h-16 absolute top-2 left-20 md:left-10' src={logo} alt="" />
            <div className='px-2'>
            <form className='bg-black formdiv py-12 px-12 md:px-16 w-full md:w-1/4  flex  flex-col justify-center items-start   text-white space-y-8 md:space-y-10 bg-opacity-75 rounded-lg'>
                <h2 className='md:text-3xl text-2xl font-Raleway'>{isloggedin ? "Sign In" : "Sign Up"}</h2>
                {isloggedin ? "" : <div className='w-full'>
                    <input required ref={name} type="text" className='px-4 py-3 rounded-md bg-[#333333] text-white w-full' placeholder='Your Name' />
                </div>}

                <div className='w-full'>
                    <p className='font-Poppins text-red-700 pb-2'>{error}</p>
                    <input required ref={email} type="email" className='px-4 py-3 rounded-md bg-[#333333] text-white w-full font-Raleway' placeholder='Your Email ID' />
                </div>
                <div className='w-full'>
                    <input required ref={password} type="password" className='px-4 py-3 rounded-md bg-[#333333] text-white w-full font-Raleway' placeholder='Your Password' />
                </div>
                <div className='w-full'>
                    <button onClick={HandleClick} className='bg-[#E50914] w-full md:text-lg py-3 rounded-lg font-semibold font-Raleway'> {isloggedin ? "Sign In" : "Sign Up"}</button>

                    <p onClick={HandleClickLogin} className='font-Raleway mt-5 cursor-pointer '>{isloggedin ? "New To NetFlix? " : "Already Registered "} <span className='font-Raleway font-semibold'>{isloggedin ? "Sign Up" : "Sign In"}</span></p>
                </div>
            </form>
            
            </div>
        </div>
    );
};


export default Login