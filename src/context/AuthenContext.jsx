import { createContext } from "react";
export const AuthContext = createContext();

export default function AutnContextProvider({ children }) {
    const user = null;
    return <AuthContext.Provider value={{user : user}}>{children}</AuthContext.Provider>
}