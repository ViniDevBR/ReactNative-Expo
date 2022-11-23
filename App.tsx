//EXPO
import { StatusBar } from 'expo-status-bar';
//COMPONENTS
import { Loading } from './src/components/Loading';
import { Background } from './src/components/Background';
//GOOGLE FONTS
import { 
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold
} from "@expo-google-fonts/roboto";
//SAFE AREA CONTEXT
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Routes } from './src/routes';
import { ThemeProvider } from 'styled-components/native'
import light from './src/theme/light';
import dark from './src/theme/dark';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  })
  
  return (
    <ThemeProvider theme={light}>
      <SafeAreaProvider>
        <Background>
          {fontsLoaded ? <Routes/> : <Loading/> } 
          <StatusBar 
            style='dark'
            backgroundColor= 'transparent'
            translucent
          />
        </Background>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}