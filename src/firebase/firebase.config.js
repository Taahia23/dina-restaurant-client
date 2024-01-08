// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGCUHaVLzNEyDtGZ8mnrvQGtXFJWzTmPI",
  authDomain: "dina-restaurant.firebaseapp.com",
  projectId: "dina-restaurant",
  storageBucket: "dina-restaurant.appspot.com",
  messagingSenderId: "748588476980",
  appId: "1:748588476980:web:829b222d58a781eed03861"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;