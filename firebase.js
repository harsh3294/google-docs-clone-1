import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkuYFLSOth0NRdFieuybu-UuKsAe4K_YI",
  authDomain: "docs-acae7.firebaseapp.com",
  projectId: "docs-acae7",
  storageBucket: "docs-acae7.appspot.com",
  messagingSenderId: "234079874648",
  appId: "1:234079874648:web:07d7c002c5726ab4ef642d",
  measurementId: "G-J5FE4S7PH3",
};
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export { db };
