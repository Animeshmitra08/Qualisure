import React, {createContext, useContext, useEffect, useState} from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase/Firebase";

const authContext = createContext();

export function UserAuthContextProvider({children}) {

    const [user, setUser] = useState("");

    function signUp(email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    function doSignOut() {
        
    }

    useEffect(() => {
      const unSub = onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser);
      });
    
      return () => {
        unSub();
      }
    }, [])
    

    const values = {
        user,
        signUp,
        login,
        doSignOut
    }


    
    return (
        <authContext.Provider value={values}>
            {children}
        </authContext.Provider>
    )
}

export function useUserAuth() {
    return useContext(authContext);
}