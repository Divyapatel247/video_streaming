import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDE2QoZy47z2PRRNxQirRNKpRYMeL8x9O4",
  authDomain: "video-1d80a.firebaseapp.com",
  projectId: "video-1d80a",
  storageBucket: "video-1d80a.appspot.com",
  messagingSenderId: "157610303038",
  appId: "1:157610303038:web:5ef3baa62c67ded8a9bb6f",
  measurementId: "G-CN921HB7D3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;