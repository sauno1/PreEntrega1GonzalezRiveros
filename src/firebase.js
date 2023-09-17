import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAIM0mQwqE86GTMZJUFx8FLGxYHCTTKBEY",
  authDomain: "react-2d0f4.firebaseapp.com",
  projectId: "react-2d0f4",
  storageBucket: "react-2d0f4.appspot.com",
  messagingSenderId: "939289204617",
  appId: "1:939289204617:web:651dfd176967cf23f57358"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)