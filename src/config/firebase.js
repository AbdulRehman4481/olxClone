// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMRTTBRj8RRx8jEIiLETZKPlFy0mJ959c",
  authDomain: "olxclone-2a3c1.firebaseapp.com",
  projectId: "olxclone-2a3c1",
  storageBucket: "olxclone-2a3c1.appspot.com",
  messagingSenderId: "591725802495",
  appId: "1:591725802495:web:7bf3488f6d1d0da2112dca",
  measurementId: "G-YMGYYV79XG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);