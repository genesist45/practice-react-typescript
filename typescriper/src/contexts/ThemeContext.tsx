import { createContext } from 'react'
import { theme } from './theme'           // Import ang actual theme object
import type { Theme } from './theme'      // Import ang type/interface para type checking

interface ThemeContextProviderProps {
  children: React.ReactNode               // Props nga mo-accept ug child component
}

// Naghimo ka ug ThemeContext gamit ang `createContext`
// Ang initial value is the theme object nga gikan sa theme.ts
export const ThemeContext = createContext<Theme>(theme)

// Provider component – mao ni gamiton nimo sa App aron ipaabot (provide) ang theme sa mga child components
export const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
  return (
    <>
      {/* Mao ni ang Provider. Ang "value={theme}" ang data nga ipa-ambit sa tanang anak nga components */}
      <ThemeContext.Provider value={theme}>
        {children}  {/* Mo-render sa tanang child components nga gi-wrap sa ThemeContextProvider */}
      </ThemeContext.Provider>
    </>
  )
}
