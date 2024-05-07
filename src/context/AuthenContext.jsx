import { createContext, useState } from "react";
export const AuthContext = createContext();
import * as UserAPI from '../apis/userApi'

// eslint-disable-next-line react/prop-types
export default function AutnContextProvider({ children }) {
    const [user, setUser] = useState(null);

    // useEffect(()=> {
    //     login();
    // },[]);

    const login = async () => {
        try {
            const response = await UserAPI.getUserById('1')
            setUser(response.data)
            console.log(response.data)

        }catch (error) {
            setUser(null);
            console.log(error)
        }
    }
    
    const logout = () => {
        setUser(null);
    }
    return <AuthContext.Provider value={{user , login , logout}}>{children}</AuthContext.Provider>;
}