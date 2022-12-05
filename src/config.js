// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBljyOqB-yfz6A71Rtfnj341u5n8vCNe2w",
    authDomain: "listdatabase-f15bd.firebaseapp.com",
    projectId: "listdatabase-f15bd",
    storageBucket: "listdatabase-f15bd.appspot.com",
    messagingSenderId: "873188720697",
    appId: "1:873188720697:web:db92fed95c9807d7900de8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Database
export const db = getDatabase(app)