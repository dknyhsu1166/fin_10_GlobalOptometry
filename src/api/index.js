import { getApps, getApp, initializeApp } from "firebase/app";
import {
    getFirestore,
    doc,
    getDoc,
    getDocs,
    setDoc,
    collection,
    initializeFirestore,
} from "firebase/firestore";
import {
    initializeAuth,
    getReactNativePersistence,
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
} from "firebase/auth";

import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
    apiKey: "AIzaSyAYBApvKmiIn_b0r503aYAH-voGWnBs8qA",
    authDomain: "globaloptometry-972b8.firebaseapp.com",
    projectId: "globaloptometry-972b8",
    storageBucket: "globaloptometry-972b8.appspot.com",
    messagingSenderId: "857440257688",
    appId: "1:857440257688:web:fda7c401f2f4a054f532ed",
    measurementId: "G-GG5ECMEN0B"
};

const app_length = getApps().length > 0;

// Initialize Firebase
const app = app_length ? getApp() : initializeApp(firebaseConfig);

// REFERENCE DB
const db = app_length
    ? getFirestore(app)
    : initializeFirestore(app, { experimentalForceLongPolling: true });

// REFERENCE AUTH
const auth = app_length
    ? getAuth(app)
    : initializeAuth(app, {
        persistence: getReactNativePersistence(ReactNativeAsyncStorage),
    });

export const checkLogin = () => getAuth(app).currentUser;

export const login = async ({ email, password }) => {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential?.user;
    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);
    const userData = docSnap?.data();
    return { uid: user?.uid, accessToken: user?.accessToken, email, ...userData };
};

export const register = async ({ name, email, password }) => {
    const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
    );
    const user = userCredential?.user;
    const docRef = doc(db, "users", user.uid);
    await setDoc(docRef, {
        name,
        email,
    });
    return { uid: user?.uid, accessToken: user?.accessToken, name, email };
};

export const logout = async () => {
    await auth.signOut();
};