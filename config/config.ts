import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCXZOcTwuq5iqwncb5bicXfTkdNe_sJIHE",
    authDomain: "desafio3-c04c1.firebaseapp.com",
    projectId: "desafio3-c04c1",
    storageBucket: "desafio3-c04c1.firebasestorage.app",
    messagingSenderId: "388816530383",
    appId: "1:388816530383:web:fa7dd8eb4159ed07adc0ba",
};

//inicializa o firebase
const app = initializeApp(firebaseConfig);

//exporta o serviço para autenticação
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
export { auth, googleProvider, signInWithPopup };
