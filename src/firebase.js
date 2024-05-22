// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBL-qoLONSBQgrXemscykcqUnnMjxG5Ors",
  authDomain: "acme-735a8.firebaseapp.com",
  projectId: "acme-735a8",
  storageBucket: "acme-735a8.appspot.com",
  messagingSenderId: "94456368206",
  appId: "1:94456368206:web:15fa3e0ffea253eefac71f",
  measurementId: "G-PLDDTN87BQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();


export { db, storage, googleProvider,auth };
