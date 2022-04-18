// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChqKeyVZ_E8fFRPomSKPJBM2E4M-fPqOo",
  authDomain: "ema-john-simple-e6ad0.firebaseapp.com",
  projectId: "ema-john-simple-e6ad0",
  storageBucket: "ema-john-simple-e6ad0.appspot.com",
  messagingSenderId: "53496630383",
  appId: "1:53496630383:web:030a78fe9e4e9689e0519a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app); 

export default auth;