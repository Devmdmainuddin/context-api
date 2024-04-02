import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword,sendPasswordResetEmail, onAuthStateChanged,signOut} from "firebase/auth";
import PropTypes from 'prop-types';
import auth from "../Firebase/firebase.confic";


export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
const [user,setuser]= useState(null)
const [loader,setloader]=useState(true)

const createUser = (email, password) => {
    
    setloader(true)
    return createUserWithEmailAndPassword(auth, email, password)
    
}
const signInUser = (email,password)=>{
    
    setloader(true)
   return signInWithEmailAndPassword(auth,email,password)
}
const resetpassword =(email)=>{
    setloader(true)
    return sendPasswordResetEmail(auth,email) 
    
}
const logOut = ()=>{
     setloader(true)
    signOut(auth)
}

useEffect(()=>{
    const unSubscribe =  onAuthStateChanged(auth, currentUser =>{
        setuser(currentUser)
        setloader(false)
        //   console.log('onserving current user inside',currentUser )
      })
      return ()=>{
          unSubscribe();
      }
  },[])


const authinfo = {user,loader,createUser,signInUser,resetpassword,logOut}
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.node,
}
export default AuthProvider;