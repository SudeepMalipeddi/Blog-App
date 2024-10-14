// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB-o_J2zJ1ppfatoLoOn5Ya64d5wKQGFRs",
    authDomain: "fireblog-5a9c4.firebaseapp.com",
    projectId: "fireblog-5a9c4",
    storageBucket: "fireblog-5a9c4.appspot.com",
    messagingSenderId: "228328692647",
    appId: "1:228328692647:web:0fcea9208ba5bd319bf482"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// const auth = getAuth(firebaseApp);
// const db = getFirestore(firebaseApp);
export default firebaseApp;
