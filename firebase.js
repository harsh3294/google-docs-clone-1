import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKQKC8fypdRTQnP2tqopSH0s9akGsCZ7E",
  authDomain: "docs-clone-a3700.firebaseapp.com",
  projectId: "docs-clone-a3700",
  storageBucket: "docs-clone-a3700.appspot.com",
  messagingSenderId: "1367330904",
  appId: "1:1367330904:web:db8a91729402c323a7ba2d",
  measurementId: "G-KGVDL01WZ7",
};
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export { db };
