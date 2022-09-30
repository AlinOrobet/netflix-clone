import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD4UfssnBzXGsTlj6_pHzwJNCmubbO5E7s",
  authDomain: "netflix-clone-ao.firebaseapp.com",
  projectId: "netflix-clone-ao",
  storageBucket: "netflix-clone-ao.appspot.com",
  messagingSenderId: "377192862815",
  appId: "1:377192862815:web:a878a8853b2ad479e037ea",
  measurementId: "G-E1WZYMM8SR",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth};
export default db;
