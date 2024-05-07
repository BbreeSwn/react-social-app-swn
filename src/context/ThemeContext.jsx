import { createContext } from "react";

export const ThemeContext = createContext();

export default function ThemeContextProvider({children}) {
    const mode = 'light';
    return <ThemeContext.Provider value={{mode : mode}}>{children}</ThemeContext.Provider>;
}