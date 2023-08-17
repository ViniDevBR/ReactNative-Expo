import { useState } from 'react'
//HOOK FORM
import { Control, Controller, FieldValues } from 'react-hook-form'
//INTERFACE && COMPONENTS
import { Input, InputProps } from '../Input'
//STYLES
import { Error } from './styles'
import { ErrorText } from '../Input/styles'
import { AntDesign } from '@expo/vector-icons'

interface Props extends InputProps {
  control: Control<FieldValues>
  name: 'user' | 'password' | 'email'
  error?: any
  changeIcon?: () => void
  addErrors?: (errors: string[]) => void
}

export function ControlledInput({ ...props }: Props) {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false)
  const [inputValue, setInputValue] = useState<string>('')
  const [allErros, setAllErros] = useState<string[]>([])

  const handleInputChange = (text: string) => {
    setInputValue(text)
  }

  const clearInput = () => {
    setInputValue('')
  }

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible)
  }
  const addAllErrors = (val: string[]) => {
    setAllErros(val)
    console.log('passou no add final')
  }

  function verifyRequisits(val: string) {
    if (props.name === 'password' && props.type === 'signup') {
      const errors: string[] = []
      if (val.length < 8) {
        errors.push('8 Caracteres')
      }

      if (!/\D/.test(val)) {
        errors.push('uma letra MAIÚSCULA')
      }

      if (!/\d/.test(val)) {
        errors.push('um NÚMERO')
      }

      if (!/[a-z]/.test(val)) {
        errors.push('uma letra MINUSCULA')
      }

      if (!/[!@#$%]/.test(val)) {
        errors.push('um caractere especial (ex: !@#$%)')
      }

      setAllErros(errors)
    }
  }

  return (
    <>
      {props.icon == 'eye' || props.icon === 'eye-off' ? (
        <Controller
          name={props.name}
          control={props.control}
          render={({ field: { onChange, value } }) => {
            return (
              <Input
                onChangeText={(text) => {
                  handleInputChange(text)
                  verifyRequisits(text)
                  onChange(text)
                }}
                value={value}
                {...props}
                changeIcon={togglePasswordVisibility}
                addErrors={addAllErrors}
                icon={passwordVisible ? 'eye-off' : 'eye'}
                secureTextEntry={!passwordVisible}
              />
            )
          }}
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

      {allErros.map((error, index) => (
        <>
          <ErrorText key={index}>{error}</ErrorText>
        </>
      ))}
    </>
  )
}
