// firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBklUI72TEIMM7eT848n43lOkpGIpRN_YY",
  authDomain: "airdata-f2e6d.firebaseapp.com",
  databaseURL: "https://airdata-f2e6d-default-rtdb.firebaseio.com",
  projectId: "airdata-f2e6d",
  storageBucket: "airdata-f2e6d.firebasestorage.app",
  messagingSenderId: "192724219454",
  appId: "1:192724219454:web:7cd3d139ad85488949836f",
  measurementId: "G-T5LTNCLTFE"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
const auth = getAuth(app);

export { app, analytics, database, auth };
