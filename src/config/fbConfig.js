import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAY_x9Div3cMqAFSTzAA5AdUuv9HX-UxAw",
  authDomain: "marioplan-521d5.firebaseapp.com",
  databaseURL: "https://marioplan-521d5.firebaseio.com",
  projectId: "marioplan-521d5",
  storageBucket: "marioplan-521d5.appspot.com",
  messagingSenderId: "549888098115",
  appId: "1:549888098115:web:19fa36fa1f6961a11f79f6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;