import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; // Corrigimos o import para getStorage em vez de storage

const firebaseConfig = {
  apiKey: "AIzaSyBVYX1j-BgtggiKIBXrrcxfdggMlgFVs9A",
  authDomain: "venusplatas.firebaseapp.com",
  projectId: "venusplatas",
  storageBucket: "venusplatas.appspot.com",
  messagingSenderId: "565076194384",
  appId: "1:565076194384:web:89b55a0a66a9a349bdcd55"
};

const app = initializeApp(firebaseConfig);

const storage = getStorage(app); // Corrigimos para getStorage em vez de firebase.storage()

export const db = getFirestore(app);
export { storage }; // Não precisa da palavra-chave "export" aqui
