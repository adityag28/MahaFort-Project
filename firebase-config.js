// src/firebase-config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAQwpIT80mh4X9WGccw0CEyqxTDtGHIM6c",
  authDomain: "maha-fort-login-form.firebaseapp.com",
  projectId: "maha-fort-login-form",
  storageBucket: "maha-fort-login-form.appspot.com",
  messagingSenderId: "1046285538963",
  appId: "1:1046285538963:web:d357f7b113022828d85f66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Correct way to export auth
export const auth = getAuth(app);
// ✅ Correct way to export auth
