//REACT
import { View } from 'react-native';
//SAFE AREA CONTEXT
import { SafeAreaView } from 'react-native-safe-area-context';
//COMPONENTS
import { Header } from '../../components/Header';
import { styles } from './styles'


export function Home() {
  return(
    <SafeAreaView>
       <View style={styles.container}>
        <Header />
        
      </View>
    </SafeAreaView>
  )
}