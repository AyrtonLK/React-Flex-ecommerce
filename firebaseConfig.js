import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCUD-KPCQLeiDkQFlRyCbtfcETiPG-7y1s",
  authDomain: "react-coderhouse-dc53c.firebaseapp.com",
  projectId: "react-coderhouse-dc53c",
  storageBucket: "react-coderhouse-dc53c.firebasestorage.app",
  messagingSenderId: "660971944482",
  appId: "1:660971944482:web:1e0ec75f897ef2c3f9687b"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);