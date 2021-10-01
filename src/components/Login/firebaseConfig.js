import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCFPJtGHpaErhetMRqXMY8-eO3Yo96ICig",
  authDomain: "burj-al-arab-4ad55.firebaseapp.com",
  projectId: "burj-al-arab-4ad55",
  storageBucket: "burj-al-arab-4ad55.appspot.com",
  messagingSenderId: "196671844671",
  appId: "1:196671844671:web:ada2e1352ec40540e6a38a",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
