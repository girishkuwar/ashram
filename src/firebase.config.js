// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDidj7KvmOwPr3bGk1r9f8ymyzOXLnk9Y",
  authDomain: "janjatikalyanashram-c015e.firebaseapp.com",
  projectId: "janjatikalyanashram-c015e",
  storageBucket: "janjatikalyanashram-c015e.firebasestorage.app",
  messagingSenderId: "422114442778",
  appId: "1:422114442778:web:90e916103fbea1c37ddba3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);