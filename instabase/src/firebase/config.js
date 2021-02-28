 // Your web app's Firebase configuration
 import * as firebase from "firebase/app";
 import 'firebase/storage';
 import 'firebase/firestore';
 var firebaseConfig = {
    apiKey: "AIzaSyCgTOw20jMRSz2eO-ctGUQkSNk9c1bQuZE",
    authDomain: "shubham-instabase.firebaseapp.com",
    projectId: "shubham-instabase",
    storageBucket: "shubham-instabase.appspot.com",
    messagingSenderId: "939261222674",
    appId: "1:939261222674:web:c357fff16985a923939dcb"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage =firebase.storage();
  const projectFirestore=firebase.firestore(); 