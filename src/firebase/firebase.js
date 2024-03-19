// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUlGQyL3Dv_5GCV6rr__UK_j8S_7bpVCU",
  authDomain: "vectorizebear.firebaseapp.com",
  projectId: "vectorizebear",
  storageBucket: "vectorizebear.appspot.com",
  messagingSenderId: "131167120755",
  appId: "1:131167120755:web:ef543f9e93536beaf1e906",
  measurementId: "G-PWMCZJNSNJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log("api" + process.env.API_KEY);
export const auth = getAuth(app);

export default app;
