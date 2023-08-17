//REACT
import { ComponentProps, useState } from 'react'
import { TextInputProps, Animated } from 'react-native'
//STYLES && ICONS && HOOK
import { InputContainer, InputText, IconContainer } from './styles'
import { useTheme } from 'styled-components'
import { Feather } from '@expo/vector-icons'

export interface InputProps extends TextInputProps {
  icon?: ComponentProps<typeof Feather>['name']
  name: string
  value?: string
  type?: string
  changeIcon?: () => void
  addErrors?: (errors: string[]) => void
  onClear?: () => void
}

export function Input({ ...props }: InputProps) {
  const { COLORS } = useTheme()

  const [isFocused, setIsFocused] = useState<boolean>(false)
  const [isFilled, setIsFilled] = useState<boolean>(false)

  const labelAnimation = new Animated.Value(props.value || isFocused ? 1 : 0)

  const labelStyle = {
    position: 'absolute',
    left: 10,
    top: labelAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [18, -22],
    }),
    fontSize: labelAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 12],
    }),
    color: labelAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: ['#aaa', COLORS.PRIMARY_900],
    }),
    padding: labelAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 12],
    }),
    backgroundColor: labelAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: ['transparent', COLORS.WHITE],
    }),
  }

  function handleInputFocus() {
    setIsFocused(true)
  }
  function handleInputBlur() {
    setIsFocused(false)
    setIsFilled(!!props.value)
  }

  return (
    <InputContainer isFocused={isFocused}>
      {props.name == 'email' && (
        <Animated.Text style={labelStyle as any}>Email</Animated.Text>
      )}
      {props.name == 'password' && (
        <Animated.Text style={labelStyle as any}>Senha</Animated.Text>
      )}
      {props.name == 'user' && (
        <Animated.Text style={labelStyle as any}>Nome</Animated.Text>
      )}

      <InputText
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        isFocused={isFocused}
        value={props.value}
        onChangeText={(val) => console.log(val)}
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
        <IconContainer onPress={props.onClear}>
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
