//REACT
import { ComponentProps, useState } from 'react'
import { TextInputProps } from 'react-native'
//STYLES && ICONS && HOOK
import { InputContainer, InputText, IconContainer } from './styles'
import { useTheme } from 'styled-components'
import { Feather } from '@expo/vector-icons'

export interface InputProps extends TextInputProps {
  icon?: ComponentProps<typeof Feather>['name']
  name: string
  value?: string
  changeIcon?: () => void
}

export function Input({ ...props }: InputProps) {
  const { COLORS } = useTheme()

  const [isFocused, setIsFocused] = useState<boolean>(false)
  const [isFilled, setIsFilled] = useState<boolean>(false)

  function handleInputFocus() {
    setIsFocused(true)
  }
  function handleInputBlur() {
    setIsFocused(false)
    setIsFilled(!!props.value)
  }

  return (
    <InputContainer isFocused={isFocused}>
      <InputText
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        isFocused={isFocused}
        value={props.value}
        {...props}
      />

      {props.icon == 'eye' || props.icon == 'eye-off' ? (
        <IconContainer onPress={props.changeIcon}>
          <Feather
            name={props.icon}
            size={24}
            color={isFocused || isFilled ? COLORS.PRIMARY_900 : COLORS.ICON}
          />
        </IconContainer>
      ) : (
        <IconContainer>
          <Feather
            name={props.icon}
            size={24}
            color={isFocused || isFilled ? COLORS.PRIMARY_900 : COLORS.ICON}
          />
        </IconContainer>
      )}
    </InputContainer>
  )
}
