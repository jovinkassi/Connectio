import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBGToJl9psCaeN-KYuaV0nixNkEoOUn-eg",
    authDomain: "services-5d4a7.firebaseapp.com",
    projectId: "services-5d4a7",
    storageBucket: "services-5d4a7.appspot.com",
    messagingSenderId: "580821709710",
    appId: "1:580821709710:web:289b3133d650eb7d2faadf"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();
  
  export { firebaseApp, db,auth };
  