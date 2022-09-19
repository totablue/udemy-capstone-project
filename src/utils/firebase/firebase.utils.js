import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithPopup,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
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

// Sign Up (New Users)
export const createUserDocumentFromAuth = async (
    userAuth,
    additionalInformation = {}
) => {
    if (!userAuth) return;

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
                ...additionalInformation,
            });
        } catch (error) {
            console.log("error creating the user", error.message);
        }
    }
    // If user DOES exist
    // return userDocRef
    return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
};

// Sign In (Existing Users)
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
};
