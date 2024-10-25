// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4BlIoJSt7alItT2PR6fbccUh-CrBMf78",
  authDomain: "ez-book-af76a.firebaseapp.com",
  projectId: "ez-book-af76a",
  storageBucket: "ez-book-af76a.appspot.com",
  messagingSenderId: "675478447337",
  appId: "1:675478447337:web:81675a8fe50dc428943c78",
  measurementId: "G-Q1DHNVRJ30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);