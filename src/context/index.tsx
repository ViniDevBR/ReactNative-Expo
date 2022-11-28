import { Children, createContext, ReactNode, useContext, useState } from 'react'

interface Notification {
  state: boolean
}
interface Menu {
  state: boolean
}
interface NotificationtProviderProps {
  children: ReactNode
}
interface MenuProviderProps {
  children: ReactNode
}

export const NotificationContext = createContext<Notification>(
  {} as Notification
)

export function MenuContext(props: MenuProviderProps) {
  const context = useContext(NotificationContext)

  return(
    <>
      {props. children}
    </>
  )
}