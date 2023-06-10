
import {initializeApp} from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCWVQ2QsOkbSItaGw_pCQiZyzKYKjUFsd8",
    authDomain: "slack-clone-63fd0.firebaseapp.com",
    projectId: "slack-clone-63fd0",
    storageBucket: "slack-clone-63fd0.appspot.com",
    messagingSenderId: "683275350088",
    appId: "1:683275350088:web:52b46fa65f25d3e424287d"
  };



  const app= initializeApp(firebaseConfig);
 const auth=getAuth(app);
 const provider = new GoogleAuthProvider();
  const db= getFirestore(app);

  export {auth,db,provider};