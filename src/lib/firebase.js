import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // For Authentication
import { getFirestore } from "firebase/firestore"; // If using Firestore
import { getStorage } from "firebase/storage"; // If using Firebase Storage

const firebaseConfig = {
    apiKey: "AIzaSyBwxyosx7GnNGVYxeZyHhJH-KNjo3-UQfA",
    authDomain: "instaxpert.firebaseapp.com",
    projectId: "instaxpert",
    storageBucket: "instaxpert.firebasestorage.app",
    messagingSenderId: "851631088009",
    appId: "1:851631088009:web:f13854e2aeef0dea4c4158",
    measurementId: "G-H4RLLNE21Q"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { auth, firestore, storage };

