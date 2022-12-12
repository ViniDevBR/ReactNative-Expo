import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react'
//import { useColorScheme } from '../hooks/useColorScheme'
import themesSchema from '../theme'
import { DefaultTheme } from 'styled-components'
import { useColorScheme } from 'react-native'


export interface ITheme {
  themeMode: DefaultTheme
  setThemeMode: Dispatch<SetStateAction<DefaultTheme>>
}

//
interface IThemeProviderProps {
  children: ReactNode
}

export const ToggleThemeContext = createContext<ITheme>({} as ITheme)

export function ToggleThemeContextProvider({ children }: IThemeProviderProps) {
  const deviceTheme = useColorScheme()
  const firstThemeChoice = themesSchema[deviceTheme ? deviceTheme : 'light']
  
  const [themeMode, setThemeMode] = useState(firstThemeChoice)
  
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