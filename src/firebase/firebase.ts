// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";
import { connectFunctionsEmulator, getFunctions } from "firebase/functions";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDzy1-iSYq2DXFkof2_090sr0doahZb7f0",
    authDomain: "vote-sucu.firebaseapp.com",
    projectId: "vote-sucu",
    storageBucket: "vote-sucu.appspot.com",
    messagingSenderId: "1030565842438",
    appId: "1:1030565842438:web:dd7afccb034494337cfd87",
    measurementId: "G-W17S2NQNXR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const functions = getFunctions(app, 'asia-southeast1');

if (import.meta.env.NODE_ENV === 'development') {
    connectFirestoreEmulator(db, 'localhost', 8080);
    connectFunctionsEmulator(functions, 'localhost', 4000);
}


export {
    analytics,
    db,
    functions
};

