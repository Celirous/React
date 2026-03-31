import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {

  apiKey: "AIzaSyA8MUrIzfwy-vm9Xm_WRGPWzL4Ynoz7GlA",
  authDomain: "todo-list-98895.firebaseapp.com",
  databaseURL: "https://todo-list-98895-default-rtdb.firebaseio.com",
  projectId: "todo-list-98895",
  storageBucket: "todo-list-98895.firebasestorage.app",
  messagingSenderId: "729199458030",
  appId: "1:729199458030:web:034998816e8867dc37e5ff"

};


const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth();
