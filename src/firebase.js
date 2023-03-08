// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth,signInWithEmailAndPassword ,createUserWithEmailAndPassword} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAVjGaQzvRpDWa29zeH_BkchGZDkcJyYp8",
  authDomain: "looper-9c7aa.firebaseapp.com",
  projectId: "looper-9c7aa",
  storageBucket: "looper-9c7aa.appspot.com",
  messagingSenderId: "573909190466",
  appId: "1:573909190466:web:fa8ec8d312e6cac4fbeadb"
};


const app = initializeApp(firebaseConfig);

export const auth=getAuth(app)