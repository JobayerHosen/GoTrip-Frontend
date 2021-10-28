import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "@firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
import useLoading from "./useLoading";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useLoading();

  const auth = getAuth();

  //   GOOGLE SIGN IN
  const signInWithGoogle = () => {
    setIsLoading(true);
    const gAuthProvider = new GoogleAuthProvider();
    signInWithPopup(auth, gAuthProvider)
      .then((result) => {
        setUser(result.user);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  };

  //   LOG OUT
  const logOut = () => {
    signOut(auth).then(setUser(null));
  };

  //   GET CURRENT USER WITH AUTH OBSERVER
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        setUser(user);
        setIsLoading(false);
        // ...
      } else {
        // User is signed out

        setIsLoading(false);
      }
    });
  }, []);

  return {
    user,
    error,
    setError,
    isLoading,
    signInWithGoogle,
    logOut,
  };
};

export default useFirebase;
