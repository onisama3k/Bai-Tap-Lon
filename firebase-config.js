import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC6cgTn-iTgzdXZypXSANISEJ-442I9pnA",
  authDomain: "bai-tap-lon-8858b.firebaseapp.com",
  projectId: "bai-tap-lon-8858b",
  storageBucket: "bai-tap-lon-8858b.appspot.com",
  messagingSenderId: "460161910501",
  appId: "1:460161910501:web:b805013d2c0a2f88aff60c",
  measurementId: "G-Q7LGH5RJN0"
};
// Khởi tạo Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };