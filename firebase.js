import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/database"

const firebaseConfig = {
    apiKey: "AIzaSyDz-UGitleYyBEgHPozDAH2Nn5aXj16kKs",
    authDomain: "challenge-a7404.firebaseapp.com",
    projectId: "challenge-a7404",
    storageBucket: "challenge-a7404.appspot.com",
    messagingSenderId: "1018779785923",
    appId: "1:1018779785923:web:c58f2f7773db20ca9ea076",
    measurementId: "G-MRN05HK07Y"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
