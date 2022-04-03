// Import the functions you need from the SDKs you need
import { FirebaseError, initializeApp } from "firebase/app";
import { doc, getDocFromCache, getFirestore, setDoc } from "firebase/firestore";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  User,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6SyP-qk_1sI4-zZZG6fNm6qiTdoeXPaY",
  authDomain: "crwn-db-8a584.firebaseapp.com",
  projectId: "crwn-db-8a584",
  storageBucket: "crwn-db-8a584.appspot.com",
  messagingSenderId: "45590791462",
  appId: "1:45590791462:web:85372cf0b199a3eed26de7",
  measurementId: "G-TH6FY2GEL8",
  setVerificationDisabled: false,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
//TODO:enable analytics
// const analytics = getAnalytics(app);

export const createUserProfileDocument = async (
  userAuth: User,
  additionalData: any
) => {
  console.log("createUserProfileDocument");
  console.log({ userAuth, additionalData });
  if (!userAuth) return;
  const userRef = doc(db, "users", userAuth.uid);
  const snapShot = await getDocFromCache(userRef);
  if (!snapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error: unknown) {
      if (error instanceof FirebaseError)
        console.log("error creating user", error.message);
    }
  }
  return userRef;
};

export const auth = getAuth();

const provider = new GoogleAuthProvider();
provider.addScope("https://www.googleapis.com/auth/contacts.readonly");

provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => signInWithPopup(auth, provider);
