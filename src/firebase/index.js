// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4Uo1iIzVhVZ9F3PFD0kkLfOgx71uocVY",
  authDomain: "ob-tasklist-firebase.firebaseapp.com",
  projectId: "ob-tasklist-firebase",
  storageBucket: "ob-tasklist-firebase.appspot.com",
  messagingSenderId: "45362721152",
  appId: "1:45362721152:web:eb9a450e4b347e5fcf1165"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Inicializar Firestore
export const db = getFirestore();