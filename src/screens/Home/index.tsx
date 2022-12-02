//REACT
import { Text } from 'react-native'
//SAFE AREA CONTEXT
import { SafeAreaView } from 'react-native-safe-area-context'
//COMPONENTS
import { Header } from '../../components/Header'
//STYLES
import { useTheme } from 'styled-components'

export function Home() {
  const { COLORS } = useTheme()

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.BACKGROUND2 }}>
      <Header />
      <Text>HOME</Text>
    </SafeAreaView>
  )
}
