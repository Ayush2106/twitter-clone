// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from "firebase";
// const firebaseConfig = {
//     apiKey: "AIzaSyCz5KvjzA1U8h4noXrzrt2GRivJiID5QEg",
//     authDomain: "twitter-clone-36f5d.firebaseapp.com",
//     projectId: "twitter-clone-36f5d",
//     storageBucket: "twitter-clone-36f5d.appspot.com",
//     messagingSenderId: "237496947501",
//     appId: "1:237496947501:web:70ed016876500691f0f9a4",
//     measurementId: "G-3MW4PNZZPM"
//     //collection id maine meausremnet id hi rakhn di same .
  
//   };


//   const firebaseApp = firebase.initializeApp(firebaseConfig);

//   const db = firebaseApp.firestore();
//   export default db;


import "firebase/auth"
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCz5KvjzA1U8h4noXrzrt2GRivJiID5QEg",
       authDomain: "twitter-clone-36f5d.firebaseapp.com",
       projectId: "twitter-clone-36f5d",
     storageBucket: "twitter-clone-36f5d.appspot.com",
       messagingSenderId: "237496947501",
       appId: "1:237496947501:web:70ed016876500691f0f9a4",
      measurementId: "G-3MW4PNZZPM"
       //collection id maine meausremnet id hi rakhn di same

};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export { auth, provider };
export default db;
