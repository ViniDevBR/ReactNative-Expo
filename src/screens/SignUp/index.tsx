//REACT
import { StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { useState } from 'react'
//STYLES
import { SignUpContainer, Title, TitleBold, Line1, TermsAcept, TermsLine, TermsText } from './styles'
import { useTheme } from 'styled-components'
//COMPONENTS
import { ControlledInput } from '../../components/ControlInput'
import { Buttons } from '../../components/Button'
import { IFormInputs } from '../SignIn'
import Checkbox from 'expo-checkbox'
//HOOK FORM
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
//NAVIGATION
import { useNavigation } from '@react-navigation/native'


const defaultForm: IFormInputs = {
  email: '',
  user: '',
  password: '',
  terms: false
}

const schema = yup.object({
  user: yup.string().required('Campo Obrigatório'),
  password: yup.string().min(6, 'Não esta faltando alguma coisa?').required('Campo Obrigatório'),
  email: yup.string().email('Este e-mail esta correto?').required('Campo Obrigatório').lowercase(),
  terms: yup.boolean().required('Não esqueça de ler os termos')
}).required()

export function SignUp() {
  const [isChecked, setChecked] = useState<boolean>(false)
  const { COLORS } = useTheme()
  const { navigate, goBack } = useNavigation()

  const { control, handleSubmit, formState: { errors }} = useForm<IFormInputs>({
    defaultValues: defaultForm,
    resolver: yupResolver(schema),
    mode: 'onTouched',
    reValidateMode: 'onChange'
  })

  function onSubmit(data: IFormInputs) {
    console.log(data)
    navigate('SignIn')
  }

  function handleCheckBox() {
    setChecked(!isChecked)
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SignUpContainer>
        <Title>
          Sou <TitleBold>Junior</TitleBold>
        </Title>
        <Title type="subtitle">Criar conta</Title>

        <ControlledInput
          control={control}
          name="user"
          placeholder="Nome"
          keyboardType="email-address"
          icon="user"
          error={errors.user}
        />
        <ControlledInput
          control={control}
          name="email"
          placeholder="E-mail"
          keyboardType="email-address"
          icon="mail"
          error={errors.email}
        />
        <ControlledInput
          control={control}
          name="password"
          placeholder="Senha"
          icon="lock"
          secureTextEntry
          autoCorrect={false}
          clearTextOnFocus
          error={errors.password}
        />

        <Line1 />
        
        <TermsAcept onPress={handleCheckBox}>
          <Controller
            name="terms"
            control={control}
            
            render={({ field: { onChange, value } }) => (
              <Checkbox
                style={styles.checkbox}
                value={!!value && isChecked}
                onValueChange={onChange}
                color={COLORS.PRIMARY_900}
              />
            )}
          />

          <TermsText>
            Li e aceito os
            <TermsLine> termos </TermsLine>e
            <TermsLine> políticas de privacidade </TermsLine>
          </TermsText>
        </TermsAcept>

        <Buttons
          onPress={handleSubmit(onSubmit)}
          type="signin"
          title="Criar conta"
        />
        <Buttons onPress={goBack} type="linkedin" title="Fazer login" />
      </SignUpContainer>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  checkbox: {
    marginRight: 8
  }
})
