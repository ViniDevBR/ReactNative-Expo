//REACT
import { Pressable, StyleSheet } from 'react-native'
import { useState } from 'react'
//STYLES
import {
  SignInContainer,
  Title,
  TitleBold,
  TermsAcept,
  TermsText,
  TermsLine,
  Line1,
  LinesContainer,
  TextOU
} from './styles'
import { useTheme } from 'styled-components'
//COMPONENTS
import { Input } from '../../components/Input'
//HOOK FORM
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Buttons } from '../../components/Button'
//EXPO
import Checkbox from 'expo-checkbox'
//ICONS
import { Fontisto } from '@expo/vector-icons'
import { User, Lock } from 'phosphor-react-native'
//NAVIGATION
import { useNavigation } from '@react-navigation/native'

interface IFormInputs {
  user: string
  password: string
}

const schema = yup
  .object({
    user: yup
      .string()
      .email('Este e-mail esta correto?')
      .required('Campo Obrigatório'),
    password: yup
      .string()
      .min(6, 'Não esta faltando alguma coisa?')
      .required('Campo Obrigatório')
  })
  .required()

export function SignIn() {
  const [isChecked, setChecked] = useState(false)
  const { COLORS } = useTheme()
  const { navigate } = useNavigation()

  const { control, handleSubmit } = useForm<IFormInputs>({
    resolver: yupResolver(schema)
  })

  function onSubmit(data: IFormInputs) {
    console.log(data)
  }
  function handleCheckBox() {
    setChecked(!isChecked)
  }
  function handleLogin() {
    navigate('Home')
  }
  function handleSignUp() {
    navigate('SignUp')
  }
  return (
    <SignInContainer>
      <Title>
        Sou <TitleBold>Junior</TitleBold>
      </Title>
      <Title type="subtitle">Entrar</Title>

      <Input
        placeholder="User"
        icon={<User size={20} weight="duotone" color={COLORS.ICON} />}
      />
      <Input
        placeholder="Password"
        icon={<Lock size={20} weight="duotone" color={COLORS.ICON} />}
        secureTextEntry
        autoCorrect={false}
        clearTextOnFocus
      />

      <TermsAcept onPress={handleCheckBox}>
        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? COLORS.PRIMARY_900 : undefined}
        />
        <TermsText>
          Li e aceito os
          <TermsLine> termos </TermsLine>e
          <TermsLine> políticas de privacidade </TermsLine>
        </TermsText>
      </TermsAcept>

      <Buttons onPress={handleLogin} type="signin" title="Entrar" />

      <LinesContainer>
        <Line1 />
        <TextOU>OU</TextOU>
        <Line1 />
      </LinesContainer>

      <Buttons
        onPress={handleLogin}
        type="linkedin"
        title="Entrar com Linkedin"
        iconLeft={
          <Fontisto name="linkedin" size={24} color={COLORS.PRIMARY_900} />
        }
      />

      <Pressable onPress={handleSignUp}>
        <Title type="signup">Criar conta</Title>
      </Pressable>
    </SignInContainer>
  )
}

export const styles = StyleSheet.create({
  checkbox: {
    marginRight: 8
  }
})
