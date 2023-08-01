 import { initializeApp } from "firebase/app";
 import { getAuth  } from 'firebase/auth'
 
 const firebaseConfig = {
     apiKey: process.env.API_KEY,
     authDomain: "fir-auth-1993c.firebaseapp.com",
     projectId: "fir-auth-1993c",
     storageBucket: "fir-auth-1993c.appspot.com",
     messagingSenderId: "24281127067",
     appId: "1:24281127067:web:d440ce9115fc900c208e3e"
 };

 // Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);  