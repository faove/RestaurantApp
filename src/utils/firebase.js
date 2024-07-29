import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";


const firebaseConfig = {
  apiKey: "AIzaSyCM7VcEbfAguaT1FcaL5RVbcyhgHzNUX9c",
  authDomain: "restaurantapp-v1.firebaseapp.com",
  projectId: "restaurantapp-v1",
  storageBucket: "restaurantapp-v1.appspot.com",
  messagingSenderId: "89038766968",
  appId: "1:89038766968:web:aa711920e9fa6758a03e8d"
};

// Inicializa la aplicación Firebase
const app = initializeApp(firebaseConfig);

// Inicializa Firebase Auth con AsyncStorage
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export { app, auth };