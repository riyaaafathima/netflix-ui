



// firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// import { getAnalytics } from "firebase/analytics"; // Optional


const firebaseConfig = {
  apiKey: "AIzaSyD1p1sd2iMHVQLnes52OxEhFMIIcGkIBiA",
  authDomain: "netflix-clone-2ea13.firebaseapp.com",
  projectId: "netflix-clone-2ea13",
  storageBucket: "netflix-clone-2ea13.firebasestorage.app",
  messagingSenderId: "469360807059",
  appId: "1:469360807059:web:5ed843d81b7ac0ec711166",
  measurementId: "G-P715VP5YF2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// const analytics = getAnalytics(app); // optional
 export const auth = getAuth();

export default app;










