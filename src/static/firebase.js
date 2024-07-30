import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const app = initializeApp({
  apiKey: "AIzaSyBtPiA6KeSr-_2p1Q095F8hrVWU4aCzJko",
  authDomain: "nba-blog-1ace2.firebaseapp.com",
  projectId: "nba-blog-1ace2",
  storageBucket: "nba-blog-1ace2.appspot.com",
  messagingSenderId: "666066184852",
  appId: "1:666066184852:web:1b4d84f675e4cb7a162281"
});

const db = getFirestore(app);
export { db };
