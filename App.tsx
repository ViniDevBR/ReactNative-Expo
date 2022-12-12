//EXPO
import { StatusBar } from 'expo-status-bar'
//COMPONENTS
import { Loading } from './src/components/Loading'
//GOOGLE FONTS
import {
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
  useFonts
} from '@expo-google-fonts/inter'
//SAFE AREA CONTEXT
import { SafeAreaProvider } from 'react-native-safe-area-context'
//ROUTES
import { Routes } from './src/routes'
//STYLED-COMPONENTS
import { ThemeProvider } from 'styled-components/native'
//CONTEXT
import { HeaderContextProvider } from './src/context/headerContext'
import { ToggleThemeContext, ToggleThemeContextProvider } from './src/context/toggleThemeContext' 


export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black
  })
 
  return (
    <HeaderContextProvider>
      <ToggleThemeContextProvider>
        <ToggleThemeContext.Consumer>
          {({themeMode}) => {
            return(
              <ThemeProvider theme={themeMode}>
                <SafeAreaProvider>
                  {fontsLoaded ? <Routes /> : <Loading />}
                  <StatusBar style="auto" backgroundColor="transparent" translucent />
                </SafeAreaProvider>
              </ThemeProvider>
            )}}
        </ToggleThemeContext.Consumer>
      </ToggleThemeContextProvider>
    </HeaderContextProvider>
  )
}
