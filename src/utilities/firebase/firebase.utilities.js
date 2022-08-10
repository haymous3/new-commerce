
import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBc-VQM16sz_E73ax48A8Cwd1tHLZC3bEU",
  authDomain: "new-commerce-d6550.firebaseapp.com",
  projectId: "new-commerce-d6550",
  storageBucket: "new-commerce-d6550.appspot.com",
  messagingSenderId: "595314749726",
  appId: "1:595314749726:web:ef457c0265cc50b11d190f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()


provider.setCustomParameters({
    prompt: 'select_account'
})


export const auth = getAuth()

export const signWithGoogle = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserProfile = async (userAuth) => {

  const reference = doc(db, 'users', userAuth.uid);


  const snapshot = await getDoc(reference)

  console.log(reference)
  console.log(snapshot.exists())

  if(!snapshot.exists()){
      const {displayName, email} = userAuth;
      const createdAt = new Date();
    try{
      await setDoc(reference, {
        displayName,
        email,
        createdAt

      })
    }catch(error){
      console.log(error.message)

    }
  }

}