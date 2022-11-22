//EXPO
import { StatusBar } from 'expo-status-bar';
//COMPONENTS
import { Loading } from './src/components/Loading';
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
      {fontsLoaded ? <Routes/> : <Loading/> } 
      <StatusBar 
        style='dark'
        backgroundColor= 'transparent'
        translucent
      />
    </SafeAreaProvider>
  );
}