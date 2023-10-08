// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeAhJarhVGQACrr_qAnPNir0Ao8N4MFB4",
  authDomain: "bigha-d314f.firebaseapp.com",
  databaseURL: "https://bigha-d314f-default-rtdb.firebaseio.com",
  projectId: "bigha-d314f",
  storageBucket: "bigha-d314f.appspot.com",
  messagingSenderId: "728435733817",
  appId: "1:728435733817:web:3dcc8e2a768f624dfa24e8",
  measurementId: "G-KY81K2W7WJ"
};

// Initialize Firebase
const app= initializeApp(firebaseConfig);
export const db= getDatabase(app);