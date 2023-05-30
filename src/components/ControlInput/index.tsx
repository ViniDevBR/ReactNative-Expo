//HOOK FORM
import { Control, Controller, FieldError } from 'react-hook-form'
//INTERFACE && COMPONENTS
import { IFormInputs } from '../../screens/SignIn'
import { Input, InputProps } from '../Input'
//STYLES
import { Error } from './styles'

interface Props extends InputProps {
  control: Control<IFormInputs>
  name: 'user' | 'password' | 'email'
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
