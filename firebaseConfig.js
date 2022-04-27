// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPfZ8P7v_4V3TPD2t0KmjAFAqUtli5Cqk",
  authDomain: "angel-folio.firebaseapp.com",
  projectId: "angel-folio",
  storageBucket: "angel-folio.appspot.com",
  messagingSenderId: "706438261140",
  appId: "1:706438261140:web:45cc84012d94d764be0781",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);