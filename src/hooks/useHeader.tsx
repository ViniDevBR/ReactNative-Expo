//REACT
import { useContext } from 'react'
//CUSTOM HOOK
import { HeaderContext, IHeader } from '../context/headerContext'

export function useHeader(): IHeader {
  const context = useContext(HeaderContext)

  return context
}
