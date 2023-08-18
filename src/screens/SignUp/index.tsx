//REACT
import { useState } from 'react'
import {
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  Platform,
  Alert,
} from 'react-native'
//STYLES
import {
  SignUpContainer,
  Title,
  TitleBold,
  Line1,
  TermsAcept,
  TermsLine,
  TermsText,
  CheckBox,
} from './styles'
import { useTheme } from 'styled-components'
//COMPONENTS
import { ControlledInput } from '../../components/ControlInput'
import { Buttons } from '../../components/Button'
import { SignUpInterface } from '@/screens/SignUp/interfaces/interfaces'
//HOOK FORM
import { FieldValues, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
//NAVIGATION
import { useNavigation } from '@react-navigation/native'
import { api } from '../../localServer'

const defaultForm: SignUpInterface = {
  email: '',
  user: '',
  password: '',
}

const schema = yup
  .object({
    user: yup.string().required('Campo Obrigatório').trim(),
    password: yup
      .string()
      .min(6, 'Não esta faltando alguma coisa?')
      .required('Campo Obrigatório')
      .trim(),
    email: yup
      .string()
      .email('Este e-mail esta correto?')
      .required('Campo Obrigatório')
      .lowercase()
      .trim(),
  })
  .required()

export function SignUp() {
  const [isChecked, setChecked] = useState<boolean>(false)
  const { COLORS } = useTheme()
  const { navigate, goBack } = useNavigation()

  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    reset,
  } = useForm<FieldValues>({
    defaultValues: defaultForm,
    resolver: yupResolver(schema),
    mode: 'onTouched',
    reValidateMode: 'onChange',
  })

  async function onSubmit(formData: SignUpInterface) {
    try {
      const { data } = await api.post('/users', {
        user: formData.user!.trim(),
        email: formData.email.trim(),
        password: formData.password.trim(),
      })

      if (data.id) {
        Alert.alert(
          'Usuario criado com sucesso!',
          'Bem vindo ao aplicativo desenvolvido  por juniors, onde você ira achar o seu futuro emprego'
        )
        navigate('Home')
      } else {
        Alert.alert('Não foi possivel criar usuario')
      }
    } catch (error) {
      console.log('errors ===>', error)
      Alert.alert('Não foi possivel criar usuario')
    } finally {
      reset()
      setChecked(false)
    }
  }

  function handleCheckBox() {
    setChecked(!isChecked)
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView>
        <SignUpContainer
          behavior={Platform.OS === 'android' ? 'height' : 'padding'}
        >
          <Title>
            Sou<TitleBold>Junior</TitleBold>
          </Title>
          <Title type="subtitle">Criar conta</Title>

          <ControlledInput
            control={control}
            name="user"
            keyboardType="email-address"
            icon="user"
            error={errors.user}
          />
          <ControlledInput
            control={control}
            name="email"
            keyboardType="email-address"
            icon="mail"
            error={errors.email}
          />
          <ControlledInput
            control={control}
            name="password"
            icon="eye"
            type="signup"
            secureTextEntry
            autoCorrect={false}
            clearTextOnFocus
            error={errors.password}
          />

          <Line1 />

          <TermsAcept onPress={handleCheckBox}>
            <CheckBox
              value={isChecked}
              onValueChange={setChecked}
              color={COLORS.PRIMARY_900}
            />

            <TermsText>
              Li e aceito os
              <TermsLine> termos </TermsLine>e
              <TermsLine> políticas de privacidade </TermsLine>
            </TermsText>
          </TermsAcept>

          <Buttons
            onPress={handleSubmit(onSubmit as any)}
            isLoading={isSubmitting}
            type="signin"
            title="Criar conta"
            disabled={!isChecked || !isValid || isSubmitting}
          />
          <Buttons onPress={goBack} type="linkedin" title="Fazer login" />
        </SignUpContainer>
      </ScrollView>
    </TouchableWithoutFeedback>
  )
}
