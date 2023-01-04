
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyA0GgH8XqobSh0PRsZPLObsgqpEPwEhREw",
    authDomain: "linkedin-ce434.firebaseapp.com",
    projectId: "linkedin-ce434",
    storageBucket: "linkedin-ce434.appspot.com",
    messagingSenderId: "69372274153",
    appId: "1:69372274153:web:e7e3ea42431feb426a9778"
  };
export const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const db=getFirestore(app)
export const storage=getStorage(app)