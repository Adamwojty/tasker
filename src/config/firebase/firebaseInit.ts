import firebase from 'firebase';
import 'firebase/firestore';

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
export const db = fb.firestore();
