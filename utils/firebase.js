// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBrt_6vHeUM9TMJJJlP1tgM6nUgmSRAW74",
    authDomain: "myflix-a9da2.firebaseapp.com",
    projectId: "myflix-a9da2",
    storageBucket: "myflix-a9da2.appspot.com",
    messagingSenderId: "504850133883",
    appId: "1:504850133883:web:ea16e217706fcbc51283de",
    measurementId: "G-69Y2GTHWE2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()