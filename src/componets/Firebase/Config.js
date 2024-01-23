
import {initializeApp} from "firebase/app";
import {getFirestore} from "@firebase/firestore"
import { getAuth } from "firebase/auth";
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyByfXnomoes6rE4h25dnKPNhVgHJIoASzs",
    authDomain: "olx-clone-68a6e.firebaseapp.com",
    projectId: "olx-clone-68a6e",
    storageBucket: "olx-clone-68a6e.appspot.com",
    messagingSenderId: "1019617549103",
    appId: "1:1019617549103:web:8859b7cc6b45222930dfda",
    measurementId: "G-MNQ1Y814X3"
  };

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app);

export const db = getFirestore(app)
export const storage = getStorage(app);
