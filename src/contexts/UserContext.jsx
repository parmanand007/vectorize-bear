import { createContext, useContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";
const AuthContext = createContext();
import { auth } from "../firebase/firebase";
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState();
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };
  const logout = () => {
    return auth.signOut();
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("user", currentUser);
    });
    return () => {
      unsubscribe();
    };
  });
  return (
    <AuthContext.Provider value={{ googleSignIn, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};

// import { auth } from "../firebase/firebase";
// const userAuthContext = createContext();

// export const userAuthContextProvider = ({ children }) => {
//   const [user, setUser] = useState("");
//   function googleSignIn() {
//     const GAuthProvider = GoogleAuthProvider();
//     return signInWithPopup(auth, GAuthProvider);
//   }
//   function signOut() {
//     return auth.signOut();
//   }
//   useEffect(() => {
//     const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//     });
//     return () => {
//       unSubscribe();
//     };
//   }, []);

//   return (
//     <userAuthContext.Provider value={{ user, googleSignIn }}>
//       {children}
//     </userAuthContext.Provider>
//   );
// };

// export function useAuth() {
//   return useContext(userAuthContext);
// }
