//REACT
import { View, Text } from 'react-native'
//SAFE AREA CONTEXT
import { SafeAreaView } from 'react-native-safe-area-context'
//COMPONENTS
import { Header } from '../../components/Header'
import { HomeContainer } from './styles'
import { Background } from '../../components/Background'

export function Home() {
  return (
    <Background>
      <SafeAreaView style={{ flex: 1 }}>
        <Header />
        <Text>HOME</Text>
      </SafeAreaView>
    </Background>
  )
}
