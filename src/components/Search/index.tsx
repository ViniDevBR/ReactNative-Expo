//REACT
import { TextInput } from 'react-native'
//STYLES & ICON
import { ContainerInput } from './styles'
import { Ionicons } from '@expo/vector-icons'
import { useTheme } from 'styled-components'


export function Search() {
  const { COLORS } = useTheme()
  return (
    <ContainerInput>
      <TextInput
        placeholder="O quê, cargo, área..."
        placeholderTextColor={COLORS.PLACEHOLDER}
      ></TextInput>
      <Ionicons name="search-outline" size={24} color={COLORS.PLACEHOLDER} />
    </ContainerInput>
  )
}
