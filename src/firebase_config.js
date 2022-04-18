import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDtsalpyMCU5QuQoq8YIK_zze-koc4mfbU",
    authDomain: "todo-app-13236.firebaseapp.com",
    projectId: "todo-app-13236",
    storageBucket: "todo-app-13236.appspot.com",
    messagingSenderId: "262095006459",
    appId: "1:262095006459:web:99267f7baefeebafc85e5e",
    measurementId: "G-7QQ0D06XJ1"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);