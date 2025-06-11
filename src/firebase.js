// src/config/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEQBt7UK6u6dqBGVPS6GoEYHT7ftgeeHU",
  authDomain: "myrecords-b9f07.firebaseapp.com",
  projectId: "myrecords-b9f07",
  storageBucket: "myrecords-b9f07.firebasestorage.app",
  messagingSenderId: "373454993445",
  appId: "1:373454993445:web:a1e6eb802715ff3deba7cc",
  measurementId: "G-XVPL9FMKJD"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);