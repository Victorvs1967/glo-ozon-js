import cart from './module/cart';
import catalog from './module/catalog';
import filter from './module/filter';
import load from './module/load';
import search from './module/search';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1AhQFDFD5aNcWO856uriCs0Vd2Ossl-w",
  authDomain: "glo-ozon-app.firebaseapp.com",
  databaseURL: "https://glo-ozon-app-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "glo-ozon-app",
  storageBucket: "glo-ozon-app.appspot.com",
  messagingSenderId: "793079550132",
  appId: "1:793079550132:web:6d085f3b8058dc7bcb07e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


load();
cart();
search();
catalog();
filter();