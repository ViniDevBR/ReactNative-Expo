//REACT
import { ReactNode } from 'react'
import { TouchableOpacityProps, ActivityIndicator } from 'react-native'
//STYLES
import { ButtonContainer, Title, EmptyBox } from './styles'
import { useTheme } from 'styled-components'

interface Props extends TouchableOpacityProps {
  title: string
  iconLeft?: ReactNode
  iconRight?: ReactNode
  type?: 'close' | 'selected' | 'linkedin' | 'signin' | 'signup' | 'anonymous'
  emptyBox?: boolean
  disabled?: boolean
  isLoading?: boolean
}

export function Buttons({ emptyBox = true, ...props }: Props) {
  const { COLORS } = useTheme()

  return (
    <ButtonContainer types={props.type} disabled={props.disabled} {...props}>
      {props.isLoading ? (
        <ActivityIndicator color={COLORS.PLACEHOLDER} size="large" />
      ) : (
        <>
          {props.iconLeft}
          {emptyBox ? props.iconRight && <EmptyBox /> : null}

          <Title
            disabled={props.disabled}
            types={props.type}
            style={{
              marginRight: props.iconRight ? 10 : 0,
              marginLeft: props.iconLeft ? 0 : 0,
            }}
          >
            {props.title}
          </Title>

          {props.iconRight}
          {emptyBox ? props.iconLeft && <EmptyBox /> : null}
        </>
      )}
    </ButtonContainer>
  )
}
