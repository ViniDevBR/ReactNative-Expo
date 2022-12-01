import { ReactNode } from 'react'
import { TextInput, TextInputProps } from 'react-native'
import { InputContainer } from './styles'

interface IInput extends TextInputProps {
  placeholder: string
  icon?: ReactNode
}

export function Input({ ...props }: IInput) {
  return (
    <InputContainer>
      <TextInput {...props} />
      {props.icon}
    </InputContainer>
  )
}
