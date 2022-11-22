//REACT
import { View, Text } from 'react-native';
//SAFE AREA CONTEXT
import { SafeAreaView } from 'react-native-safe-area-context';
//COMPONENTS
import { Header } from '../../components/Header';
import { styles } from './styles'
import { Background } from '../../components/Background';

export function Vagas() {
  return(
    <Background>
      <SafeAreaView>
         <View style={styles.container}>
          <Header />
          <Text>VAGAS</Text>
        </View>
      </SafeAreaView>
    </Background>
  )
}