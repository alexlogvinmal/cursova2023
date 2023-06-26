import { initializeApp } from "firebase/app";
import {collection, getFirestore} from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyABmNr4MI_bQPIJgNWr6u5pTReahzatfsc",
  authDomain: "ggggg-aae46.firebaseapp.com",
  projectId: "ggggg-aae46",
  storageBucket: "ggggg-aae46.appspot.com",
  messagingSenderId: "288460937272",
  appId: "1:288460937272:web:e1c2182332ad4b4513eecd"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const productsCollection = collection(db, 'products');
export const sellersCollection = collection(db, 'sellers');