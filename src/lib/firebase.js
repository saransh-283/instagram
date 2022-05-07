import Firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyDW0HTKjHbSzS1anV9ec9AyTtRV3p8GLVI",
  authDomain: "instagram-clone-d1094.firebaseapp.com",
  projectId: "instagram-clone-d1094",
  storageBucket: "instagram-clone-d1094.appspot.com",
  messagingSenderId: "1004942343540",
  appId: "1:1004942343540:web:792bc89d2e2c6df8a98021",
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// seedDatabase(firebase);

export { firebase, FieldValue };
