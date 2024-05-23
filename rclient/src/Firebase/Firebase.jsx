// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCUjTS38YCPw7NNY9Cd9g2TopDcLcwfgP4",
  authDomain: "qualisure-3edce.firebaseapp.com",
  projectId: "qualisure-3edce",
  storageBucket: "qualisure-3edce.appspot.com",
  messagingSenderId: "954041298696",
  appId: "1:954041298696:web:c63a9556f2482ecd58c6bd",
  measurementId: "G-MVWNJB3LZ1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const database = getDatabase(app)

export {app, auth, storage, database};