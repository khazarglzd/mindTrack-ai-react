import { createContext, useContext, useState } from "react";

const AuthContext = createContext();


export const AuthProvider = ({ children }) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const signIn = () => setIsAuthenticated(true)
    const signOut = () => setIsAuthenticated(false)


    return (
        <AuthContext.Provider value={{ isAuthenticated, signIn, signOut }}  >
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext);
}