//REACT
import {
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  Platform
} from 'react-native'
import { useState } from 'react'
//STYLES
import {
  SignUpContainer,
  Title,
  TitleBold,
  Line1,
  TermsAcept,
  TermsLine,
  TermsText,
  CheckBox
} from './styles'
import { useTheme } from 'styled-components'
//COMPONENTS
import { ControlledInput } from '../../components/ControlInput'
import { Buttons } from '../../components/Button'
import { IFormInputs } from '../SignIn'
//HOOK FORM
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
//NAVIGATION
import { useNavigation } from '@react-navigation/native'
import { api } from '../../localServer'

const defaultForm: IFormInputs = {
  email: '',
  user: '',
  password: ''
}

const schema = yup
  .object({
    user: yup.string().required('Campo Obrigatório'),
    password: yup
      .string()
      .min(6, 'Não esta faltando alguma coisa?')
      .required('Campo Obrigatório'),
    email: yup
      .string()
      .email('Este e-mail esta correto?')
      .required('Campo Obrigatório')
      .lowercase(),
    terms: yup.boolean().required('Não esqueça de ler os termos')
  })
  .required()

export function SignUp() {
  const [isChecked, setChecked] = useState<boolean>(false)
  const { COLORS } = useTheme()
  const { navigate, goBack } = useNavigation()

  const { control, handleSubmit, formState: { errors } } = useForm<IFormInputs>({
    defaultValues: defaultForm,
    resolver: yupResolver(schema),
    mode: 'onTouched',
    reValidateMode: 'onChange'
  })

  const onSubmit: SubmitHandler<IFormInputs> = async ( formData: IFormInputs ) => {
    console.log(formData)

    try {
      const { data } = await api.post('/users', {
        name: formData.user.trim(),
        email: formData.email!.trim(),
        senha: formData.password.trim()
      })

      if (data.id) {
        alert('Usuario criado com sucesso!')
        navigate('Home')
      } else {
        alert('Não foi possivel criar usuario')
      }
    } catch (error) {
      console.log('errors ===>', error)
      alert('Não foi possivel criar usuario')
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
          <Title type='subtitle'>Criar conta</Title>

          <ControlledInput
            control={control}
            name='user'
            placeholder='Nome'
            keyboardType='email-address'
            icon='user'
            error={errors.user}
          />
          <ControlledInput
            control={control}
            name='email'
            placeholder='E-mail'
            keyboardType='email-address'
            icon='mail'
            error={errors.email}
          />
          <ControlledInput
            control={control}
            name='password'
            placeholder='Senha'
            icon='lock'
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
            onPress={handleSubmit(onSubmit)}
            type='signin'
            title='Criar conta'
            disabled={!isChecked}
          />
          <Buttons onPress={goBack} type='linkedin' title='Fazer login' />
        </SignUpContainer>
      </ScrollView>
    </TouchableWithoutFeedback>
  )
}
