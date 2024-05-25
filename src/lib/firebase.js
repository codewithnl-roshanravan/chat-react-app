import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "chatreactapp-57938.firebaseapp.com",
  projectId: "chatreactapp-57938",
  storageBucket: "chatreactapp-57938.appspot.com",
  messagingSenderId: "123999472768",
  appId: "1:123999472768:web:4e0837da6356e9ee0b6a65",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()
