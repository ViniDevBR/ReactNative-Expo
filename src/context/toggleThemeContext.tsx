//REACT
import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react'
import { useColorScheme } from 'react-native'
//STYLED-COMPONENTS
import themesSchema from '../theme'
import { DefaultTheme } from 'styled-components'


export interface ITheme {
  themeMode: DefaultTheme
  setThemeMode: Dispatch<SetStateAction<DefaultTheme>>
}

interface IThemeProviderProps {
  children: ReactNode
}

export const ToggleThemeContext = createContext<ITheme>({} as ITheme)

export function ToggleThemeContextProvider({ children }: IThemeProviderProps) {
  const deviceTheme = useColorScheme()
  const firstThemeChoice = themesSchema[deviceTheme ? deviceTheme : 'light']
  
  const [themeMode, setThemeMode] = useState<DefaultTheme>(firstThemeChoice)
 
  const value = {
    themeMode, 
    setThemeMode
  }

  return (
    <ToggleThemeContext.Provider value={value}>
      {children}
    </ToggleThemeContext.Provider>
  )
}