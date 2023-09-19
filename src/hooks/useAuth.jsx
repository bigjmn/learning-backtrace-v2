import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

// custom context hook for saving imports and general prettiness 
export const useAuth = () => {
    const context = useContext(AuthContext)

    // if attempted to use out of context scope, throw and error
    if (!context) {
        throw Error("outside auth scope!")
    }
    return context 
}