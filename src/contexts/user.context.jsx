import { createContext, useState, useEffect } from "react";
import { createUserDocumentFromAuth, onAuthStateChangedListener, signOutUser } from "../utils/firebase/firebaje.utils";
//as the actual value you wat to access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

export const UserProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  // signOutUser();

  useEffect(() => {
    const unsuscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      console.log(user);
      setCurrentUser(user);
    });
    return unsuscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}