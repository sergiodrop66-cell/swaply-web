import { initializeApp, getApps } from 'firebase/app';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
} from 'firebase/auth';
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBzAMnqvpm6b-XiR-rf51L_vN9poUPMysk',
  authDomain: 'pokepop.firebaseapp.com',
  projectId: 'pokepop',
  storageBucket: 'pokepop.firebasestorage.app',
  messagingSenderId: '858982073919',
  appId: '1:858982073919:android:c4983916ad74cd4dc7da8a',
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
export const auth = getAuth(app);
export const db = getFirestore(app);

export {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  collection,
  addDoc,
  getDocs,
};
