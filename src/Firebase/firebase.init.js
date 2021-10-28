import { firebaseConfig } from "./firebase.config";
import { initializeApp } from "firebase/app";

const initializeAuthentication = () => {
  initializeApp(firebaseConfig);
};

export default initializeAuthentication;
