//REACT
import { ComponentProps, ReactNode, useState } from 'react'
import { TextInputProps } from 'react-native'
import { Feather } from '@expo/vector-icons'
//STYLES
import { InputContainer, InputText, IconContainer } from './styles'
//HOOK FORM
import { Control, Controller } from 'react-hook-form'
import { IFormInputs } from '../../screens/SignIn'
import { useTheme } from 'styled-components'

export interface InputProps extends TextInputProps {
  icon?: ComponentProps<typeof Feather>['name']
  name: string
  value?: string
}

export function Input({ ...props }: InputProps) {
  const { COLORS } = useTheme()
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)

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

      <IconContainer>
        <Feather
          name={props.icon}
          size={24}
          color={isFocused || isFilled ? COLORS.PRIMARY_900 : COLORS.ICON}
        />
      </IconContainer>
    </InputContainer>
  )
}
