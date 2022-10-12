import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAJ2cw_r99WeSiNeAbgU1FyY775-r_tiMI",
  authDomain: "diplomado-deploy-cuc.firebaseapp.com",
  projectId: "diplomado-deploy-cuc",
  storageBucket: "diplomado-deploy-cuc.appspot.com",
  messagingSenderId: "777045740867",
  appId: "1:777045740867:web:1160706b4eb3fe565273f6",
};

firebase.initializeApp(firebaseConfig);

export { firebase };
