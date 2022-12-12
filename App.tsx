//REACT
import { useColorScheme } from 'react-native'
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
import themesSchema from './src/theme'
//CONTEXT
import { HeaderContextProvider } from './src/context/headerContext'
import { ToggleThemeContextProvider } from './src/context/toggleThemeContext' 
//HOOKS
import { useToggleTheme } from './src/hooks/useToggleTheme'


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
  //TESTES DE PEGAR TEMA DEFINIDO NO APARELHO DO USUARIO
  const deviceTheme = useColorScheme()
  const firstThemeChoice = themesSchema[deviceTheme ? deviceTheme : 'light']

  //LOGANDO O HOOK PARA DEBUGAR E ACHAR O MOTIVO DE ESTAR VINDO UNDEFINED 
  //PQ QUANDO APLICO A MESMA ESTRATEGIA AQUI ELE RETORNA CORRETO
  const { themeMode } = useToggleTheme()
  console.log(themeMode)
  
  return (
    <HeaderContextProvider>
      <ToggleThemeContextProvider>
        <ThemeProvider theme={firstThemeChoice}>
          <SafeAreaProvider>
            {fontsLoaded ? <Routes /> : <Loading />}
            <StatusBar style="auto" backgroundColor="transparent" translucent />
          </SafeAreaProvider>
        </ThemeProvider>
      </ToggleThemeContextProvider>
    </HeaderContextProvider>
  )
}
