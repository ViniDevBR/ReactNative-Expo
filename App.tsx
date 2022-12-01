//EXPO
import { StatusBar } from 'expo-status-bar'
//COMPONENTS
import { Loading } from './src/components/Loading'
import { Background } from './src/components/Background'
//GOOGLE FONTS
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold
} from '@expo-google-fonts/roboto'
//SAFE AREA CONTEXT
import { SafeAreaProvider } from 'react-native-safe-area-context'
//ROUTES
import { Routes } from './src/routes'
//STYLED-COMPONENTS
import { ThemeProvider } from 'styled-components/native'
import light from './src/theme/light'
import dark from './src/theme/dark'
//CONTEXT
import { MenuContextProvider } from './src/context'
import { SignIn } from './src/screens/SignIn'

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  })

  return (
    <MenuContextProvider>
      <ThemeProvider theme={light}>
        <SafeAreaProvider>
          {fontsLoaded ? <Routes /> : <Loading />}
          <StatusBar style="auto" backgroundColor="transparent" translucent />
        </SafeAreaProvider>
      </ThemeProvider>
    </MenuContextProvider>
  )
}
