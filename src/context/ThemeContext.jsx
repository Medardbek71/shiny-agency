import { createContext, useState } from 'react'

// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext()

// eslint-disable-next-line react/prop-types
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light')
    const toggleTheme = () => {
        theme == 'light' ? setTheme('dark') : setTheme('light')
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}
