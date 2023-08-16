import { useState } from 'react'
//HOOK FORM
import { Control, Controller, FieldError, FieldValues } from 'react-hook-form'
//INTERFACE && COMPONENTS
import { SignUpInterface } from '@/screens/SignUp/interfaces/interfaces'
import { Input, InputProps } from '../Input'
//STYLES
import { Error } from './styles'
import { UserSignInput } from '@/screens/SignIn/interfaces/interfaces'

type FormValues = {
  email: string
  password: string
  user: string
}

interface Props extends InputProps {
  control: Control<FieldValues>
  name: 'user' | 'password' | 'email'
  error?: any
  changeIcon?: () => void
}

export function ControlledInput({ ...props }: Props) {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false)

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
          render={({ field: { onChange, value } }) => (
            <Input
              onChangeText={onChange}
              value={value}
              {...props}
            />
          )}
        />
        )
      }

      {props.error && <Error>{props.error?.message}</Error>}
    </>
  )
}
