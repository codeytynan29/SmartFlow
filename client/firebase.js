// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0t_5fdgAEyXTaLhMqbRmZm0SGORowqDU",
  authDomain: "smartflow-c0fb5.firebaseapp.com",
  projectId: "smartflow-c0fb5",
  storageBucket: "smartflow-c0fb5.firebasestorage.app",
  messagingSenderId: "334938120915",
  appId: "1:334938120915:web:320600cc1e0c5e141caa26",
  measurementId: "G-8QDE3GEQQ3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
