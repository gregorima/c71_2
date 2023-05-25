import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  //Cole sua Configuração do Firebase aqui
  apiKey: "AIzaSyC06inpBmE3APrzW6cbMztuvsXioVJup9o",
  authDomain: "projeto-44815.firebaseapp.com",
  projectId: "projeto-44815",
  storageBucket: "projeto-44815.appspot.com",
  messagingSenderId: "528032209731",
  appId: "1:528032209731:web:797e2046548d603926edf6"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
