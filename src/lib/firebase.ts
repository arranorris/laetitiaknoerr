import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyCSd_2EnL2X0e0d3czfPVhcfBwwU2EVeqI",
  authDomain: "laetitia-knoerr.firebaseapp.com",
  projectId: "laetitia-knoerr",
  storageBucket: "laetitia-knoerr.firebasestorage.app",
  messagingSenderId: "225040275353",
  appId: "1:225040275353:web:4e22b1dabf18d5e00ca508",
  measurementId: "G-ZY7SKR84HE"
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);