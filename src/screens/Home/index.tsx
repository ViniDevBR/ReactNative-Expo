import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from '../../components/Header';
import { View } from 'react-native';
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