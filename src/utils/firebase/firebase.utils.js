import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCdufIVPuYSNSJdByhLqFPTwRv6o1_mj0g",
    authDomain: "crwn-clothing-db-43f2e.firebaseapp.com",
    projectId: "crwn-clothing-db-43f2e",
    storageBucket: "crwn-clothing-db-43f2e.appspot.com",
    messagingSenderId: "1047688603015",
    appId: "1:1047688603015:web:bf74efd9c73e0df9461f22",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
