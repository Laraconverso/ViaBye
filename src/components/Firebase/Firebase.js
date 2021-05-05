import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = ({
    apiKey: "AIzaSyDq9RVjU4SRmdGCRKfRvFpWSC72Le0-GT4",
    authDomain: "viabye-c3fcd.firebaseapp.com",
    projectId: "viabye-c3fcd",
    storageBucket: "viabye-c3fcd.appspot.com",
    messagingSenderId: "956714734490",
    appId: "1:956714734490:web:c8f244a65fdb403259a023",
    measurementId: "G-HKXFHQK4Y4"
  }
  );
const firebaseDB = firebase.initializeApp(firebaseConfig);

export const db = firebaseDB.firestore();