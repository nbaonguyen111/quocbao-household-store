// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyFjagBa8N0zUvqBFMC4nt1NtXKbGVezM",
  authDomain: "household-store-d5cb9.firebaseapp.com",
  projectId: "household-store-d5cb9",
  storageBucket: "household-store-d5cb9.firebasestorage.app",
  messagingSenderId: "775179695282",
  appId: "1:775179695282:web:54028eeb3a20fa441cc5ab",
  measurementId: "G-SLB6P205DL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db};