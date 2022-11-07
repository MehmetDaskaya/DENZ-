import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDn7kx286Z-d9tptx2Ca4qW65Bil8Ihh60",
  authDomain: "denz-v01.firebaseapp.com",
  projectId: "denz-v01",
  storageBucket: "denz-v01.appspot.com",
  messagingSenderId: "28989496778",
  appId: "1:28989496778:web:ca07237bb9eade4832c333",
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
