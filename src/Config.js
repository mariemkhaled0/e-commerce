// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import toast from "react-hot-toast";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};
console.log("Firebase Config:", firebaseConfig);
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

//handle google login
const handleGoogleLogin = async (setError, navigate) => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    console.log(result.user, "result");
    toast.success("Logged in successfully 🎉");
    navigate("/profile"); // redirect to profile
  } catch (error) {
    console.log(error);
    setError(error.message);
    toast.error("Google login failed ❌");
  }
};

const handleSubmit = async (e, email, password, setError, navigate) => {
  e.preventDefault();
  try {
    const userCred = await signInWithEmailAndPassword(auth, email, password);
    console.log("user sign in", userCred.user);
    setError("");
    toast.success("Welcome back 👋");
    navigate("/profile"); // redirect to profile
  } catch (error) {
    setError("Invalid email or password");
    toast.error("Login failed ❌");
  }
};
export { auth, googleProvider, handleGoogleLogin, handleSubmit };
