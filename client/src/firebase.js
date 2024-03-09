// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "authentication-7427c.firebaseapp.com",
  projectId: "authentication-7427c",
  storageBucket: "authentication-7427c.appspot.com",
  messagingSenderId: "977634210961",
  appId: "1:977634210961:web:a6fd3258a9a3e3e01d7b30"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);