import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAeP4Ecq37z_fp2QmYBkfgCSQQlbNvqMjI",
  authDomain: "central-ia.firebaseapp.com",
  projectId: "central-ia-63f4d",
  storageBucket: "central-ia.appspot.com",
  messagingSenderId: "926521828631",
  appId: "1:926521828631:web:926521828631",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
