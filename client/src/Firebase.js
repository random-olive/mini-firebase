import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

import { collection } from "firebase/firestore";

export const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STRG_BUCKET,
  messagingSenderId: process.env.REACT_APP_MSG_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

export const firebaseInstance = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseInstance);
export const dbService = getFirestore();
export const postsCollection = collection(db, "posts");

// export const authService = getAuth(firebaseInstance);
// export const fireStore = getFirestore(firebaseInstance);
export const analytics = getAnalytics(firebaseInstance);
