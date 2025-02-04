// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth, GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByEloD6i9gYHGaVWLcz7v6mwEV1oBxRtA",
  authDomain: "duygujusfortry.firebaseapp.com",
  projectId: "duygujusfortry",
  storageBucket: "duygujusfortry.firebasestorage.app",
  messagingSenderId: "577471699702",
  appId: "1:577471699702:web:7deae8cbc36c218042ead7",
  measurementId: "G-G9M6L8R88K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();