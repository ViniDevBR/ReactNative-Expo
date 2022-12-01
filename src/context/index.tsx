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

export function MenuContextProvider(props: IHeaderProviderProps) {
  const [notification, setNotification] = useState<boolean>(false)
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  
  return(
    <HeaderContext.Provider value={{ notification, setNotification, isMenuOpen, setIsMenuOpen}}>
      {props.children}
    </HeaderContext.Provider>
  )
}