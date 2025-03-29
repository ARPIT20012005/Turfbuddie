import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCWeAoekHBvyPgMg2JqScoJ7SUtwKmW5pQ",
  authDomain: "turf-buddies.firebaseapp.com",
  projectId: "turf-buddies",
  storageBucket: "turf-buddies.appspot.com",
  messagingSenderId: "672271550387",
  appId: "1:672271550387:web:e0d6abc1822a98c66d2dc6",
  measurementId: "G-BZ0W72JLEV"

};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
