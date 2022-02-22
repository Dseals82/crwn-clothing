//import firebase to pull in util library.  Import firestore for storage and auth for authentication
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const firebaseConfig = {
  apiKey: "AIzaSyAHlJrBOvvKbFAyKdJo1W25Wew4GuYZdGk",
  authDomain: "crwn-clothing-65215.firebaseapp.com",
  projectId: "crwn-clothing-65215",
  storageBucket: "crwn-clothing-65215.appspot.com",
  messagingSenderId: "278849252664",
  appId: "1:278849252664:web:6db338e71346813532e5cd",
  measurementId: "G-8XGTGL6F7J"
};

//initialize app with firebase configuration
firebase.initializeApp(firebaseConfig);

//export authentication and firebase storage
export const auth = firebase.auth();
export const firestore = firebase.firestore();

//setup google authentication utility
const provider = new firebase.auth.GoogleAuthProvider();

//trigger Google pop up whenever provider is used for authentication and signin
provider.setCustomParameters({prompt: 'select_account'});

// method that calls auth.signinwithpopup that allows authentication for Google signin
export const signInWithGoogle = () => auth.signInWithPopup(provider);

//in case the whole library is needed
export default firebase;


