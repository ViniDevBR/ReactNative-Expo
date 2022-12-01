import { NavigationContainer } from '@react-navigation/native'
import { AppRoutes, AppRoutesWithoutTab } from './app.routes'

export function Routes() {
  const teste = true

  return (
    <NavigationContainer>
      {teste ? <AppRoutesWithoutTab /> : <AppRoutes />}
    </NavigationContainer>
  )
}
