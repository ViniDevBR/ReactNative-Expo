import { Buttons } from '../Button'
import { SelectContainer, ScrollView } from './styles'
import { CaretCircleDown } from 'phosphor-react-native'
import { useTheme } from 'styled-components'

interface Props {
  openData: VoidFunction
  openType: VoidFunction
  openEXP: VoidFunction
}

export function Select(props: Props) {
  const { COLORS } = useTheme()

  return (
    <ScrollView horizontal>
      <SelectContainer>
        <Buttons
          onPress={props.openData}
          title="Data"
          icon={
            <CaretCircleDown
              size={15}
              color={COLORS.PLACEHOLDER}
              weight="bold"
            />
          }
        />
        <Buttons
          onPress={props.openType}
          title="Tipo"
          icon={
            <CaretCircleDown
              size={15}
              color={COLORS.PLACEHOLDER}
              weight="bold"
            />
          }
        />
        <Buttons
          onPress={props.openEXP}
          title="Nivel de experiencia"
          icon={
            <CaretCircleDown
              size={15}
              color={COLORS.PLACEHOLDER}
              weight="bold"
            />
          }
        />
      </SelectContainer>
    </ScrollView>
  )
}
