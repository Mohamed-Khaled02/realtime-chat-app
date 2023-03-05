import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAqJiMSu8uB6o3SCwh_4pWZkQcwc66VYw4",
  authDomain: "chat-app-8ef31.firebaseapp.com",
  projectId: "chat-app-8ef31",
  storageBucket: "chat-app-8ef31.appspot.com",
  messagingSenderId: "273196866191",
  appId: "1:273196866191:web:7659c10cc3784789432efa"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore()