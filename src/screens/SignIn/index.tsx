//REACT
import { Pressable, Keyboard, Platform, Alert } from 'react-native'
//STYLES && ICONS
import {
  SignInContainer,
  Title,
  TitleBold,
  Line1,
  LinesContainer,
  TextOU,
  TouchableWithoutFeedback,
  ScrollView,
} from './styles'
import { Fontisto } from '@expo/vector-icons'
//COMPONENTS
import { ControlledInput } from '../../components/ControlInput'
import { Buttons } from '../../components/Button'
//HOOK FORM
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
//NAVIGATION
import { useNavigation } from '@react-navigation/native'
import { api } from '../../localServer'
import { useTheme } from 'styled-components'

export interface IFormInputs {
  user?: string
  password: string
  email: string
}

const defaultForm: IFormInputs = {
  email: '',
  password: '',
}

const schema = yup
  .object({
    email: yup
      .string()
      .email('Este e-mail esta correto?')
      .required('Campo Obrigatório')
      .lowercase()
      .trim(),
    password: yup
      .string()
      .min(6, 'Não esta faltando alguma coisa?')
      .required('Campo Obrigatório')
      .trim(),
  })
  .required()

export function SignIn() {
  const { navigate } = useNavigation()
  const { COLORS } = useTheme()

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<IFormInputs>({
    defaultValues: defaultForm,
    resolver: yupResolver(schema),
    mode: 'onTouched',
    reValidateMode: 'onChange',
  })

  function handleSignUp() {
    navigate('SignUp')
  }

  async function onSubmit(formData: IFormInputs): Promise<void> {
    try {
      const { data } = await api.get(
        `/users?email=${formData.email}&password=${formData.password}`
      )

      if (data.length && data[0].id) {
        navigate('Home')
        return
      }
    } catch (error) {
      console.log(error)
      Alert.alert('Erro')
    } finally {
      reset()
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView>
        <SignInContainer
          behavior={Platform.OS === 'android' ? 'height' : 'padding'}
        >
          <Title>
            Sou<TitleBold>Junior</TitleBold>
          </Title>
          <Title type="subtitle">Entrar</Title>

          <ControlledInput
            control={control}
            name="email"
            placeholder="E-mail"
            placeholderTextColor={COLORS.TEXT}
            style={{ color: COLORS.TEXT }}
            keyboardType="email-address"
            icon="user"
            error={errors.email}
          />

          <ControlledInput
            control={control}
            name="password"
            placeholder="Senha"
            placeholderTextColor={COLORS.TEXT}
            style={{ color: COLORS.TEXT }}
            icon="lock"
            secureTextEntry
            autoCorrect={false}
            clearTextOnFocus
            error={errors.password}
          />

          <Buttons
            onPress={handleSubmit(onSubmit)}
            disabled={isSubmitting}
            isLoading={isSubmitting}
            type="signin"
            title="Entrar"
          />

          <LinesContainer>
            <Line1 />
            <TextOU>OU</TextOU>
            <Line1 />
          </LinesContainer>

          <Buttons
            onPress={handleSubmit(onSubmit)}
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
      </ScrollView>
    </TouchableWithoutFeedback>
  )
}
