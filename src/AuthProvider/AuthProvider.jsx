import React, { createContext } from "react";
import app from "../Firebase/Firebase";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth/web-extension";
export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = () => {
  const googleProvider = new GoogleAuthProvider();

  const createAccount = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleLogin = () => {
    return signInWithPopup(googleProvider, auth);
  };
  const userLogout = () => {
    return signOut(auth);
  };

  return (
    <div>
      <p>AuthProvider</p>
    </div>
  );
};

export default AuthProvider;
