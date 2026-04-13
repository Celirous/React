// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0JM5LK4lWjmNQ0vPS9u2PzFKy9rhA3DE",
  authDomain: "expensetracker-2652f.firebaseapp.com",
  projectId: "expensetracker-2652f",
  storageBucket: "expensetracker-2652f.firebasestorage.app",
  messagingSenderId: "71092672720",
  appId: "1:71092672720:web:5627de1afea3d966d1a6d5"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

// firebase login
// firebase init
// firebase deploy
