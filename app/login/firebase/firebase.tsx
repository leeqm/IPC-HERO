import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAUUq_8JqOHzCaLNYiRhLBwOjtMov3ltDA",
    authDomain: "sonny-c6267.firebaseapp.com",
    projectId: "sonny-c6267",
    storageBucket: "sonny-c6267.appspot.com",
    messagingSenderId: "65071287473",
    appId: "1:65071287473:web:4a546a74e203715ae72690"
  };

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
