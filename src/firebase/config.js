// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsJPqzMtCf53samgSNkglVNrbDww9Fs_U",
  authDomain: "journal-app-9f476.firebaseapp.com",
  projectId: "journal-app-9f476",
  storageBucket: "journal-app-9f476.appspot.com",
  messagingSenderId: "255128613160",
  appId: "1:255128613160:web:91f4115070330a740a201d"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);