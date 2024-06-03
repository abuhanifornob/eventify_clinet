import { createContext, useEffect, useState } from "react";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const GoogleProvider = new GoogleAuthProvider();
  const FacebookProvider = new FacebookAuthProvider();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, GoogleProvider);
  };
  const facebookLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, FacebookProvider);
  };
  const createNewUser = (emai, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, emai, password);
  };

  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth).then(() => setUser(null));
  };
  useEffect(() => {
    const unscubcribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setLoading(false);
        console.log(currentUser);
      } else {
        setLoading(false);
      }
    });
    return () => {
      return unscubcribe();
    };
  }, []);

  const authInfo = {
    googleLogin,
    facebookLogin,
    user,
    createNewUser,
    login,
    logout,
    loading,
    setLoading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
