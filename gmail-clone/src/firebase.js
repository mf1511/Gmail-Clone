import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDZ_6fClZQ8pVhzZ6EElReWkrau2q5RmP4",
  authDomain: "clone-69d19.firebaseapp.com",
  projectId: "clone-69d19",
  storageBucket: "clone-69d19.appspot.com",
  messagingSenderId: "1030032633405",
  appId: "1:1030032633405:web:69a031fd069ee988698454",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
