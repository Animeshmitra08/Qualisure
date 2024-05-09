import { GoogleAuthProvider, createUserWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, signInWithPopup, signOut, updatePassword } from "firebase/auth";
import { auth } from "./Firebase";

export const createEmailandPassword = async (email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password);
};

export const signInEmailandPassword = async (email, password) =>{
    return signInEmailandPassword(auth, email, password);
};

export const googleSignIn = async () =>{
    const provider = new GoogleAuthProvider();
    const result =  await signInWithPopup(auth, provider)
    return result;
}

export const doSignOut = ()=>{
    return signOut(auth);
};

export const resetPassword = (email) =>{
    return sendPasswordResetEmail(auth, email);
}

export const changePassword = (password) =>{
    return updatePassword(auth.currentUser, password)
}

export const emailVerification = () =>{
    return sendEmailVerification(auth.currentUser, {
        url:`${window.location.origin}/home`,
    })
}