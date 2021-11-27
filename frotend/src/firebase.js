
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getFirestore } from "@firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyBNBmZF7qwPH8ZjBKJMfJKVb52kkIl5w6c",
  authDomain: "loginwithfirebase-27619.firebaseapp.com",
  databaseURL:
    "https://loginwithfirebase-27619-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "loginwithfirebase-27619",
  storageBucket: "loginwithfirebase-27619.appspot.com",
  messagingSenderId: "726715037249",
  appId: "1:726715037249:web:6cb361e810f5f4729d38c0",
});

export const auth = app.auth();
export const firestore = app.firestore();
export const db = getFirestore(app);

export default app;