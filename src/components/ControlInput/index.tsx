import React from 'react'
import { Control, Controller, FieldError } from 'react-hook-form'
import { IFormInputs } from '../../screens/SignIn'
import { Input, InputProps } from '../Input'
import { Error } from './styles'

interface Props extends InputProps {
  control: Control<IFormInputs>
  name: 'user' | 'password'
  error?: FieldError
}

export function ControlledInput({ ...props }: Props) {
  return (
    <>
      <Controller
        name={props.name}
        control={props.control}
        render={({ field: { onChange, value } }) => (
          <Input onChangeText={onChange} value={value} {...props} />
        )}
      />

      {props.error && <Error>{props.error?.message}</Error>}
    </>
  )
}
