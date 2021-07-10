import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDWoUuJXFCRdx5jVvkkp3lG-KXwWdw39Zw",
  authDomain: "ecommerce-mern-lapshop.firebaseapp.com",
  projectId: "ecommerce-mern-lapshop",
  storageBucket: "ecommerce-mern-lapshop.appspot.com",
  messagingSenderId: "912741808117",
  appId: "1:912741808117:web:d70fede81ec23644c592bc",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
