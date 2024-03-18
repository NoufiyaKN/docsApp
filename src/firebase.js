import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBYa7wkEkmeEEMWOKF9GDOS9_JNI7Jwr7s",
  authDomain: "docsapp-36517.firebaseapp.com",
  projectId: "docsapp-36517",
  storageBucket: "docsapp-36517.appspot.com",
  messagingSenderId: "173326249203",
  appId: "1:173326249203:web:eb37a87136651b18201b86"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);