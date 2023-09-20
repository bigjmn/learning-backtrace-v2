import { signInWithEmailAndPassword } from "firebase/auth";

import { auth } from "../firebase/config";
import { useAuth } from "./useAuth";
import { useState } from 'react'

export const useLogin = () => {
    // basic form state managers 
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    
    const { dispatch } = useAuth()

    const login = async (email, password) => {
        setError(null)
        setIsPending(true)

        try {
            const res = await signInWithEmailAndPassword(auth, email, password)
            // normally not good to manually throw error in async try/catch, but 
            // we're awaiting here so shouldn't be a problem 
            if (!res.user) {
                throw Error("could not sign it")
                
            }
            dispatch({type: 'LOGIN', payload: res.user})
            setIsPending(false)
            return true 

        } catch (err) {
            console.log(err)
            setError(err.message)
            setIsPending(false)
            return false 
        }
    }

    return { error, isPending, login }

}