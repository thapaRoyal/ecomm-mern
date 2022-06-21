// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDWoUuJXFCRdx5jVvkkp3lG-KXwWdw39Zw',
  authDomain: 'ecommerce-mern-lapshop.firebaseapp.com',
  projectId: 'ecommerce-mern-lapshop',
  storageBucket: 'ecommerce-mern-lapshop.appspot.com',
  messagingSenderId: '912741808117',
  appId: '1:912741808117:web:d70fede81ec23644c592bc',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export
export const auth = app.auth();
export const googleAuthProvider = new app.auth.GoogleAuthProvider();
