//REACT
import { useContext }from 'react'
//CUSTOM HOOK
import { HeaderContext, Notification } from '../context'

export function useHeader(): Notification {
  const context = useContext(HeaderContext)
  
  return context
}