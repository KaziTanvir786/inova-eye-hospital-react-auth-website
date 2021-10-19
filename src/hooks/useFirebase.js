import { useEffect, useState } from "react"
import initializeAuthentication from "../components/Login/firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth])

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .finally(() => {
                setIsLoading(false);
            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
        })
    }, [auth])

    return {
        auth,
        user,
        isLoading,
        setIsLoading,
        signInUsingGoogle,
        createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        logOut
    }
}

export default useFirebase;