// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "wealthwizard-1659d.firebaseapp.com",
  projectId: "wealthwizard-1659d",
  storageBucket: "wealthwizard-1659d.appspot.com",
  messagingSenderId: "879049330198",
  appId: "1:879049330198:web:cc44f1335dd27b18e7ef37",
  measurementId: "G-QX04CF6TFK",
};
console.log("bhavFB", firebaseConfig);
console.log("bhavFB2", process.env);

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
export { app, auth, analytics, db, storage };
