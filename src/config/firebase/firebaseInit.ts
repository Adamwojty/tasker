import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: 'tracker-6bdcf.firebaseapp.com',
    databaseURL: 'https://tracker-6bdcf.firebaseio.com',
    projectId: 'tracker-6bdcf',
    storageBucket: 'tracker-6bdcf.appspot.com',
    messagingSenderId: '208445472586',
    appId: '1:208445472586:web:e1defd27a9a8c901dd0bb3',
    measurementId: 'G-3V75GH8TS8',
};
const fb = firebase.initializeApp(firebaseConfig);

//firestore
export const db = fb.firestore();

//auth
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
