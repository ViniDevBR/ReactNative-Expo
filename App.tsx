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
  useFonts,
} from '@expo-google-fonts/inter'
//SAFE AREA CONTEXT
import { SafeAreaProvider } from 'react-native-safe-area-context'
//ROUTES
import { Routes } from './src/routes'
//STYLED-COMPONENTS
import { ThemeProvider } from 'styled-components/native'
//CONTEXT
import { HeaderContextProvider } from './src/context/headerContext'
import { theme } from './src/theme/theme'
import React from 'react'


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
    Inter_900Black,
  })

  return (
    <HeaderContextProvider>
      <ThemeProvider theme={theme}>
        <SafeAreaProvider>
          {fontsLoaded ? <Routes /> : <Loading />}
          <StatusBar
            style="auto"
            backgroundColor="transparent"
            translucent
          />
        </SafeAreaProvider>
      </ThemeProvider>
    </HeaderContextProvider>
  )
}
