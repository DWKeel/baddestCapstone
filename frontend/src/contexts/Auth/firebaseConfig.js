import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth'
 
const firebaseConfig = {
  apiKey: "AIzaSyCvp1p0jGbToPnJXD6m6mAcVL8pUwGswG0",
  authDomain: "capstone-86dfc.firebaseapp.com",
  projectId: "capstone-86dfc",
  storageBucket: "capstone-86dfc.appspot.com",
  messagingSenderId: "955859174274",
  appId: "1:955859174274:web:278aa1ab78a068641a059b"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const user = auth.currentUser;

const firebase = {
    signup: (email, password) => createUserWithEmailAndPassword(auth, email, password),
    login: (email, password) => signInWithEmailAndPassword(auth, email, password),
    logout: () => signOut(auth),
    getCurrentUser: callback => onAuthStateChanged(auth, user => callback(user))
}

export default firebase;