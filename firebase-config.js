// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6cgTn-iTgzdXZypXSANISEJ-442I9pnA",
  authDomain: "bai-tap-lon-8858b.firebaseapp.com",
  projectId: "bai-tap-lon-8858b",
  storageBucket: "bai-tap-lon-8858b.firebasestorage.app",
  messagingSenderId: "460161910501",
  appId: "1:460161910501:web:b805013d2c0a2f88aff60c",
  measurementId: "G-Q7LGH5RJN0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);