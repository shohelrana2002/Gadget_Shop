import React, { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
export const AuthContext = createContext(null);

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  // state set
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // google auth provider set
  const googleProvider = new GoogleAuthProvider();

  // create a New Account
  const createAccount = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // User Login
  const userLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Google login
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // User logOut
  const userLogout = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(currentUser);
      setLoading(false);
    });
    return () => {
      return unSubscribe();
    };
  }, []);

  // sent to context
  const authInfo = {
    user,
    loading,
    createAccount,
    userLogin,
    userLogout,
    googleLogin,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
