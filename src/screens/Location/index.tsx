//REACT
import { View, Text } from 'react-native';
//SAFE AREA CONTEXT
import { SafeAreaView } from 'react-native-safe-area-context';
//COMPONENTS
import { Header } from '../../components/Header';
import { styles } from './styles'


export function Location() {
  return(
    <SafeAreaView>
       <View style={styles.container}>
        <Header />
        <Text>LOCATION</Text>
      </View>
    </SafeAreaView>
  )
}