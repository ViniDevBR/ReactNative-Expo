import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react'

 export interface IHeader {
  notification: boolean
  setNotification: Dispatch<SetStateAction<boolean>>
  isMenuOpen: boolean
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>
}

interface IHeaderProviderProps {
  children: ReactNode
}

export const HeaderContext = createContext<IHeader>({} as IHeader)

export function HeaderContextProvider({ children }: IHeaderProviderProps) {
  const [notification, setNotification] = useState<boolean>(false)
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  
  const value = {
    notification, 
    setNotification, 
    isMenuOpen, 
    setIsMenuOpen
  }
  
  return(
    <HeaderContext.Provider value={value}>
      {children}
    </HeaderContext.Provider>
  )
}