import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../Firebase/Firebase.init';
import useAxiosPublic from '../../Hooks/useAxiosPublic/useAxiosPublic';

export const AuthContext = createContext(null);

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const gProvider = new GoogleAuthProvider();
    const [user, setUser ] = useState(null);
    const [loading, setLoading] = useState(true);
    const axiosPublice = useAxiosPublic();

    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, gProvider)
    }

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logout = () => {
        setLoading(true)
        return signOut(auth)
    }

    const updateUserProfile = (imgURL) => {
        return updateProfile(auth.currentUser, {
            photoURL: imgURL
        })
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currenUser => {
            setUser(currenUser);
            setLoading(false)
        })

        return () => {
            return unSubscribe();
        }

    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        login,
        logout,
        googleLogin,
        updateUserProfile
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;