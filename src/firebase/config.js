import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACOd6FBGWHboZlD_ACFiEp_Im8HwUpn7A",
  authDomain: "learning-backtrace.firebaseapp.com",
  projectId: "learning-backtrace",
  storageBucket: "learning-backtrace.appspot.com",
  messagingSenderId: "86220603054",
  appId: "1:86220603054:web:90ba27520f12bfed50b73f",
  measurementId: "G-B7MJJJYJQC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app)

export { db, auth }