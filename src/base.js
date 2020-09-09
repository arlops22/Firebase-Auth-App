import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

export const app = firebase.initializeApp({
    apiKey: "AIzaSyBiB9-S2vb2Iz4fnAG8RaqKUN_6wRWyLjA",
    authDomain: "react-firebase-8a9f3.firebaseapp.com",
    databaseURL: "https://react-firebase-8a9f3.firebaseio.com",
    projectId: "react-firebase-8a9f3",
    storageBucket: "react-firebase-8a9f3.appspot.com",
    messagingSenderId: "39826742039",
    appId: "1:39826742039:web:c3d7a53478e74a86837552",
    measurementId: "G-L8WZP84G0F"
});

export const appDB = app.firestore();