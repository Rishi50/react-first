import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA6H5JZpa8GQoBIsGkwz2vJmCkkBlqkgUA",
    authDomain: "react-first-590ab.firebaseapp.com",
    projectId: "react-first-590ab",
    storageBucket: "react-first-590ab.appspot.com",
    messagingSenderId: "771868617723",
    appId: "1:771868617723:web:3258876dc6551fce8f795e",
    measurementId: "G-XDNHJ100LF"



});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db,auth,storage};
export default firebase;