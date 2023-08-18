//COMPONENTE
import { Buttons } from '../Button'
//STYLES & ICONS
import { SelectContainer, ScrollView } from './styles'
import { useTheme } from 'styled-components'
import { CaretCircleDown } from 'phosphor-react-native'

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
          emptyBox={false}
          iconRight={
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
          emptyBox={false}
          iconRight={
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
          emptyBox={false}
          iconRight={
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
