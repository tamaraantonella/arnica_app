// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA532eLjkrb5Tk_1sBNgXzlKDieOr2-e48",
  authDomain: "arnica-app.firebaseapp.com",
  projectId: "arnica-app",
  storageBucket: "arnica-app.appspot.com",
  messagingSenderId: "61316599138",
  appId: "1:61316599138:web:f770f0471b01827e72b03b",
  measurementId: "G-P2B4DV76ZK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//eslint-disable-next-line
export const db = getFirestore(app);
