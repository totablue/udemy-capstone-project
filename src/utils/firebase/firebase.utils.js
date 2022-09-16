import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

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

// Init firestore database
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, "users", userAuth.uid);
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    // Check if user data exists
    console.log(userSnapshot.exists());

    // If user DOES NOT exist
    // create / set the document with the data from userAuth in my "users" collection
    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
            });
        } catch (error) {
            console.log("error creating the user", error.message);
        }
    }
    // If user DOES exist
    // return userDocRef
    return userDocRef;
};