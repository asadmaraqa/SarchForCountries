import React, { useState, createContext, useContext } from 'react'

import { themesColors } from './themeColors'
import { ThemeContextProps, ThemeType } from './themeType'

export const ThemeContext = createContext({
  themeType: 'blue',
  theme: themesColors['blue'],
} as ThemeContextProps)

export const ThemeProvider: React.FC = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeType>('blue')

  return (
    <ThemeContext.Provider
      value={{
        themeType: currentTheme,
        theme: themesColors[currentTheme],
        setCurrentTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
