//EXPO
import { StatusBar } from 'expo-status-bar';
//REACT
import { StyleSheet } from 'react-native';
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


export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  })
  
  return (
    <SafeAreaProvider>
      <Background>
        {fontsLoaded ? <Routes/> : <Loading/> } 
        <StatusBar 
          style='light'
          backgroundColor= 'transparent'
          translucent
        />
      </Background>
    </SafeAreaProvider>
  );
}