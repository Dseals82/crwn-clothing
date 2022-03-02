//Import firebase to pull in util library.  
//Import firestore for storage
//Import firbase auth for authentication
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

//config object that has public API key
const firebaseConfig = {
  apiKey: "AIzaSyAHlJrBOvvKbFAyKdJo1W25Wew4GuYZdGk",
  authDomain: "crwn-clothing-65215.firebaseapp.com",
  projectId: "crwn-clothing-65215",
  storageBucket: "crwn-clothing-65215.appspot.com",
  messagingSenderId: "278849252664",
  appId: "1:278849252664:web:6db338e71346813532e5cd",
  measurementId: "G-8XGTGL6F7J"
};

//take user auth object and store in database to creat user
export const createUserProfileDocument = async (userAuth, additionalData) => {
  //check to see if user object is null, if so, return
  if (!userAuth) return;
  //query inside of firestore for the doc object to see if user exist by id
//Gets a DocumentReference instance that refers to the document at the specified path.
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  //Reads the document referred to by this DocumentReference. Creats a DocumentSnapshot instance and gives us exists property
  const snapShot = await userRef.get();
  //if user does not exist, create one based off of name, email, and id
  if(!snapShot.exists){
    const { displayName, email } = userAuth;
    const createdAt = new Date();
//Writes to the document referred to by this DocumentReference. If the document does not yet exist, it will be created.
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }catch(err){
      console.log('error creating user', err.message)
    }
  }

  return userRef;

}

//initialize app with firebase configuration
firebase.initializeApp(firebaseConfig);

//export authentication and firebase storage
export const auth = firebase.auth();
export const firestore = firebase.firestore();

//setup google authentication utility.  Gives us access to new Google auth class from auth library
const provider = new firebase.auth.GoogleAuthProvider();

//trigger Google pop up whenever provider is used for authentication and signin
provider.setCustomParameters({prompt: 'select_account'});

// method that calls auth.signinwithpopup that allows authentication for Google signin
//SignInWithPopup can be used with other methods like signInWithTwitter, etc.
export const signInWithGoogle = () => auth.signInWithPopup(provider);

//in case the whole library is needed
export default firebase;


