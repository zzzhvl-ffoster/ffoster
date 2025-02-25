import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBaLbMw8IMitrjoU181z5WfVk8rQIceavE",
    authDomain: "ffoster-ecd91.firebaseapp.com",
    projectId: "ffoster-ecd91",
    storageBucket: "ffoster-ecd91.firebasestorage.app",
    messagingSenderId: "588239195583",
    appId: "1:588239195583:web:2ac48158dd44239f47a50a",
    measurementId: "G-M6HXWEJDCL"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, addDoc, collection, ref, uploadBytes, getDownloadURL };

export const auth = getAuth(app);
export { signInWithEmailAndPassword, signOut };