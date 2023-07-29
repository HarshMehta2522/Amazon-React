import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyC5EXsk0t5PIGkNYoosM8oyaZBNeOMYs0A",
  authDomain: "amzon-clone-7c3cb.firebaseapp.com",
  projectId: "amzon-clone-7c3cb",
  storageBucket: "amzon-clone-7c3cb.appspot.com",
  messagingSenderId: "354533822690",
  appId: "1:354533822690:web:0af074c4d5ba5924e8cebb",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { firebaseApp,db, auth };
export default firebase;
