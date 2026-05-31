import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBXGErJvH_aaIPC3qQMFJw7kFUw68zEiBs",
    authDomain: "prime-flight-academy.firebaseapp.com",
    projectId: "prime-flight-academy",
    storageBucket: "prime-flight-academy.firebasestorage.app",
    messagingSenderId: "398395983045",
    appId: "1:398395983045:web:2276be239ed2b364131cac",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);