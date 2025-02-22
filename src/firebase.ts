// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBklUI72TEIMM7eT848n43lOkpGIpRN_YY",
    authDomain: "airdata-f2e6d.firebaseapp.com",
    projectId: "airdata-f2e6d",
    storageBucket: "airdata-f2e6d.firebasestorage.app",
    messagingSenderId: "192724219454",
    appId: "1:192724219454:web:7cd3d139ad85488949836f",
    measurementId: "G-T5LTNCLTFE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);