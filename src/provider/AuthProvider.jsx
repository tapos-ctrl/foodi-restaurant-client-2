import PropTypes from "prop-types"
import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signInWithRedirect, signOut } from "firebase/auth";
import { useState } from "react";
import { createContext } from "react";
import { useEffect } from "react";
import { auth } from './../firebase/firebase.config';
import axios from "axios";
import { useLocation } from "react-router-dom";






export const AuthContext = createContext()



const provider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();




const AuthProvider = ({children}) => {
   
    const [users, setUsers] = useState()
    const [loading, setLoading] = useState(true)



    const createUser = async (email, password) =>{
        setLoading(true)
       return  createUserWithEmailAndPassword(auth, email, password)
    }

    const logInUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignUp = () =>{
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const facebookSignUp = () =>{
        setLoading(true)
     signInWithPopup(auth, facebookProvider)
    }


    const googleLogIn = () =>{
        setLoading(false)
        setLoading(true)
        return signInWithRedirect(auth, provider)
    }

    const logOutUser = () =>{
        setLoading(true)
        signOut(auth)
    }



useEffect(()=>{

    const unsubscribe = onAuthStateChanged(auth, (user) => {
        
        if (user) {
            const uid = user;
          setUsers(uid)
          const email = uid.email

        //   axios.post(`https://foodi-restaurant-server-2.onrender.com/jwt` ,{email})
        //   .then(res=>{
        //       console.log(res)
        //   })

        }
        setLoading(false)

    })
    return () => unsubscribe()
},[])


    const authInfo = {
        users,
        createUser,
        logInUser,
        logOutUser,
        loading,
        setUsers,
        googleSignUp,
        facebookSignUp,
        googleLogIn
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
  children: PropTypes.node
}

export default AuthProvider;