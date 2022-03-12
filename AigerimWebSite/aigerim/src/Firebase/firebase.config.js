import firebase from "firebase/compat/app";
import "firebase/compat/auth";

// Initialize Firebase
const app = firebase.initializeApp({
    apiKey: "AIzaSyAirBVQNxRY7iDWeTsnWUohQvQsuXEKpVc",
    authDomain: "aigerim-d437d.firebaseapp.com",
    projectId: "aigerim-d437d",
    storageBucket: "aigerim-d437d.appspot.com",
    messagingSenderId: "605881120166",
    appId:"1:605881120166:web:5c68ba5c5aa3559a2c4b67"
});


/*
 REACT_APP_API_KEY= "AIzaSyAirBVQNxRY7iDWeTsnWUohQvQsuXEKpVc"
  REACT_APP_AUTH_DOMAIN= "aigerim-d437d.firebaseapp.com"
  REACT_APP_PROJECT_ID= "aigerim-d437d"
  REACT_APP_STORAGE_BUCKET= "aigerim-d437d.appspot.com"
  REACT_APP_MESSAGING_SENDER_ID= "605881120166"
  REACT_APP_APP_ID= "1:605881120166:web:5c68ba5c5aa3559a2c4b67"
  measurementId="G-JWZ0Q139BC"

*/
export const auth = app.auth()
export default app