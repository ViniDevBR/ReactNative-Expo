//REACT
import { useContext } from 'react'
//CUSTOM HOOK
import { ITheme, ToggleThemeContext } from '../context/toggleThemeContext'

export function useToggleTheme(): ITheme {
  const context = useContext(ToggleThemeContext)
  //Using this hook you always need to pass in the setThemeMode(example)
  //being example -----> const example = colorScheme['light' | 'dark']
  return context
}
