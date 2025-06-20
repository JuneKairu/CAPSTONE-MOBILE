// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKWvLCB2LIfS2FzWcowLWGzALMIHLeUE0",
  authDomain: "jdk-homecare.firebaseapp.com",
  projectId: "jdk-homecare",
  storageBucket: "jdk-homecare.firebasestorage.app",
  messagingSenderId: "496600494323",
  appId: "1:496600494323:web:ec8e0e45d42b009d310786",
  measurementId: "G-6DH8P4MV2W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);