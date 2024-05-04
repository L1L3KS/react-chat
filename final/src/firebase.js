// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaxVELpDMHSuvyaY5euodx-2qAfuLhtmQ",

  authDomain: "nikestore-5ed52.firebaseapp.com",

  databaseURL: "https://nikestore-5ed52-default-rtdb.europe-west1.firebasedatabase.app",

  projectId: "nikestore-5ed52",

  storageBucket: "nikestore-5ed52.appspot.com",

  messagingSenderId: "818550825850",

  appId: "1:818550825850:web:0a1824e8d7c4dc22046cc3",

  measurementId: "G-X6ZYVQBQJ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
