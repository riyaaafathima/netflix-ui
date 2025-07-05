// firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import.meta.env.VITE_apiKey;

// import { getAnalytics } from "firebase/analytics"; // Optional

const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
  measurementId: import.meta.env.VITE_measurementId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// const analytics = getAnalytics(app); // optional
export const auth = getAuth();

export default app;
