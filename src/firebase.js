// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3hdxDw4zFXm_UM_BgfcEHtBFjDEYttH4",
  authDomain: "firstproject-5aa38.firebaseapp.com",
  projectId: "firstproject-5aa38",
  storageBucket: "firstproject-5aa38.firebasestorage.app",
  messagingSenderId: "712066827864",
  appId: "1:712066827864:web:bfb9648078170b1323ec2d",
  measurementId: "G-Q58TV9LRR9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);