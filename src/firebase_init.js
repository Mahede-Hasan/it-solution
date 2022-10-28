// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTMj8zem5ZQ9STgRhtZeVgFVAoP9qGse0",
  authDomain: "it-solution-91.firebaseapp.com",
  projectId: "it-solution-91",
  storageBucket: "it-solution-91.appspot.com",
  messagingSenderId: "263273987967",
  appId: "1:263273987967:web:642a14cc937b03e237e44a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;