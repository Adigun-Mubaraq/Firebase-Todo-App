import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Initialize Firebase with web app's config
const firebaseConfig = {
    apiKey: "AIzaSyDdzugwUFPW39cV5A-wNUWeBw2g-oRTTUc",
    authDomain: "rntodoapp-e6a70.firebaseapp.com",
    projectId: "rntodoapp-e6a70",
    storageBucket: "rntodoapp-e6a70.appspot.com",
    messagingSenderId: "963298885164",
    appId: "1:963298885164:web:647df95df995e84b215b89"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);