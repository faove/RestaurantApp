import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCM7VcEbfAguaT1FcaL5RVbcyhgHzNUX9c",
  authDomain: "restaurantapp-v1.firebaseapp.com",
  projectId: "restaurantapp-v1",
  storageBucket: "restaurantapp-v1.appspot.com",
  messagingSenderId: "89038766968",
  appId: "1:89038766968:web:aa711920e9fa6758a03e8d"
};

export const initFirebase = initializeApp(firebaseConfig);