import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const app = initializeApp({
  apiKey: "AIzaSyB_wPxWsdiMDTzc-XGb4S1rPwCfRthHmAE",
  authDomain: "nba-blog-40994.firebaseapp.com",
  projectId: "nba-blog-40994",
  storageBucket: "nba-blog-40994.appspot.com",
  messagingSenderId: "653663005465",
  appId: "1:653663005465:web:cc93091c669af276787388",
});
const db = getFirestore(app);
const baseStorage = getStorage(app);

export { db, baseStorage };
