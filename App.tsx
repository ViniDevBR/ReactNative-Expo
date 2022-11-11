import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from './src/components/Header';
import { Loading } from './src/components/Loading';
import { Background } from './src/components/Background';
import { 
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold
} from "@expo-google-fonts/roboto";
import { Home } from './src/screens/Home';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  })
  
  return (
    <Background>
      {fontsLoaded ? <Home/> : <Loading/> } 
      <StatusBar 
        style='light'
        backgroundColor= 'transparent'
        translucent
      />
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center'
  }
});
