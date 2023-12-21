// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXQTndyhlFrDhFnT54T7YBlgBTFjSpt5c",
  authDomain: "task-managment-643ab.firebaseapp.com",
  projectId: "task-managment-643ab",
  storageBucket: "task-managment-643ab.appspot.com",
  messagingSenderId: "28897188213",
  appId: "1:28897188213:web:ad0390d278ad4e1a455b3c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;