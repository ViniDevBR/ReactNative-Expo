//REACT
import { useCallback } from 'react'
import { Text, BackHandler } from 'react-native'
//SAFE AREA CONTEXT
import { SafeAreaView } from 'react-native-safe-area-context'
//COMPONENTS
import { Header } from '../../components/Header'
//STYLED
import { useTheme } from 'styled-components'
//NAVIGATION
import { useFocusEffect, useNavigation } from '@react-navigation/native'

export function Add() {
  const { COLORS } = useTheme()
  const { navigate } = useNavigation()

  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        navigate('Home')
        return true
      }

      const subscription = BackHandler.addEventListener(
        'hardwareBackPress',
        onBackPress
      )
      return () => subscription.remove()
    }, [])
  )

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.BACKGROUND2 }}>
      <Header />
      <Text>ADICIONAR</Text>
    </SafeAreaView>
  )
}
