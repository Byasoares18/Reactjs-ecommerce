import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBVYX1j-BgtggiKIBXrrcxfdggMlgFVs9A",
    authDomain: "venusplatas.firebaseapp.com",
    projectId: "venusplatas",
    storageBucket: "venusplatas.appspot.com",
    messagingSenderId: "565076194384",
    appId: "1:565076194384:web:89b55a0a66a9a349bdcd55"
};
  
  
const app = initializeApp(firebaseConfig);
export const db = getFirestore (app)