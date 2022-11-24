import { createContext, ReactNode, useState } from 'react'

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
