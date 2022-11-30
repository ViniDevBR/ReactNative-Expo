import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react'

 export interface Notification {
  notification: boolean
  setNotification: Dispatch<SetStateAction<boolean>>
  menu: boolean
  setMenu: Dispatch<SetStateAction<boolean>>
}

interface HeaderProviderProps {
  children: ReactNode
}

export const HeaderContext = createContext<Notification>({} as Notification)

export function MenuContextProvider(props: HeaderProviderProps) {
  const [notification, setNotification] = useState<boolean>(false)
  const [menu, setMenu] = useState<boolean>(false)
  
  return(
    <HeaderContext.Provider value={{ notification, setNotification, menu, setMenu}}>
      {props.children}
    </HeaderContext.Provider>
  )
}