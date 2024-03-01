import { createContext, useState, useEffect, useReducer } from "react";
import { createAction } from "../utils/reducer/reducer.utils";

import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "../utils/firebase/firebaje.utils";
//as the actual value you wat to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: 'SET_CURRENT_USER'
};

const userReducer = (state, action) => {
  console.log('dispatched')
  console.log(action)
  const {type, payload} = action;
  switch(type){
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return{
        ...state,
        currentUser: payload
      }

    default:
      throw new Error(`Unhandled type ${type} in userReducer`)
  }
}

const INITIAL_STATE = {
  currentUser: null
}

export const UserProvider = ({ children }) => {
  // const [currentUser, setCurrentUser] = useState(null);
  const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);
  console.log(currentUser)
  const setCurrentUser = (user) => {
    dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER,user));
  };
  const value = { currentUser, setCurrentUser };

  // signOutUser();

  useEffect(() => {
    const unsuscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      // console.log(user);
      setCurrentUser(user);
    });
    return unsuscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
