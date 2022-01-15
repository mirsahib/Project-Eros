// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
import "firebase/storage"
import "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCp444jjTvddm--HZ7u1KKaym3ljxgz-1I",
  authDomain: "project-eros-92a7f.firebaseapp.com",
  projectId: "project-eros-92a7f",
  storageBucket: "project-eros-92a7f.appspot.com",
  messagingSenderId: "888144587221",
  appId: "1:888144587221:web:5e5fafbb308d734cdff55c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const projectStorage = firebase.storage()
const projectFireStore = firebase.firestore()

export {
    projectStorage,
    projectFireStore
}