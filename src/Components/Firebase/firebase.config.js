// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoWL337N-CTUlGYlDcjn7Ucp0K47lSO7s",
  authDomain: "beyond-bazar.firebaseapp.com",
  projectId: "beyond-bazar",
  storageBucket: "beyond-bazar.appspot.com",
  messagingSenderId: "6585458890",
  appId: "1:6585458890:web:a42ce83a5f793cc9449433"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;