import { useState } from 'react'
//HOOK FORM
import { Control, Controller, FieldValues } from 'react-hook-form'
//INTERFACE && COMPONENTS
import { Input, InputProps } from '../Input'
//STYLES
import { Error } from './styles'

interface Props extends InputProps {
  control: Control<FieldValues>
  name: 'user' | 'password' | 'email'
  error?: any
  changeIcon?: () => void
}

export function ControlledInput({ ...props }: Props) {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false)
  const [inputValue, setInputValue] = useState<string>('')

  const handleInputChange = (text: string) => {
    setInputValue(text)
  }

  const clearInput = () => {
    setInputValue('')
  }

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible)
  }

  return (
    <>
      {props.icon == 'eye' || props.icon === 'eye-off' ? (
        <Controller
          name={props.name}
          control={props.control}
          render={({ field: { onChange, value } }) => (
            <Input
              onChangeText={onChange}
              value={value}
              {...props}
              changeIcon={togglePasswordVisibility}
              icon={passwordVisible ? 'eye-off' : 'eye'}
              secureTextEntry={!passwordVisible}
            />
          )}
        />
      ) : (
        <Controller
          name={props.name}
          control={props.control}
          render={({ field: { onChange, value, onBlur } }) => (
            <Input
              onChangeText={(text) => {
                handleInputChange(text)
                onChange(text)
              }}
              value={value}
              onClear={() => {
                clearInput()
                onChange('')
              }}
              {...props}
              icon={inputValue ? 'x-circle' : props.icon}
            />
          )}
        />
      )}

      {props.error && <Error>{props.error?.message}</Error>}
    </>
  )
}
