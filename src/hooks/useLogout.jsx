import { signOut } from "firebase/auth";

import { auth } from "../firebase/config";
import { useAuth } from "./useAuth";
import { useState } from 'react'

export const useLogout = () => {
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)

    const { dispatch } = useAuth()

    const logout = async () => {
        setError(null)
        setIsPending(true)
        try {
            await signOut(auth)
            dispatch({type: 'LOGOUT'})
            setIsPending(false)
        } catch (err) {
            console.log(err)
            setError(err.message)
            setIsPending(false)
        }
    }
    
    return { error, isPending, logout }
}