
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAlPZ1pIKCXbK8ZND7mLcvNyyK6DJNFHJU",
    authDomain: "clothes-api-storage.firebaseapp.com",
    projectId: "clothes-api-storage",
    storageBucket: "clothes-api-storage.appspot.com",
    messagingSenderId: "436524695145",
    appId: "1:436524695145:web:2dcace5d4a550d9bde6cf8"
};

const app = initializeApp(firebaseConfig);
export const  storage = getStorage(app)