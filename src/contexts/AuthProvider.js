import React, { createContext } from "react";
import useFirebase from "../hooks/useFirebase";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const firebaseAuth = useFirebase();
  return <AuthContext.Provider value={firebaseAuth}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
