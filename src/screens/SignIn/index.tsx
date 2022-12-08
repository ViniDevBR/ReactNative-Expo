//REACT
import { Pressable, TouchableWithoutFeedback, Keyboard } from 'react-native'
//STYLES && ICONS
import { SignInContainer, Title, TitleBold, Line1, LinesContainer, TextOU } from './styles'
import { useTheme } from 'styled-components'
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

export interface IFormInputs {
  user: string
  password: string
  email?: string
  terms?: boolean
}

const defaultForm: IFormInputs = {
  user: '',
  password: ''
}

const schema = yup.object({
  user: yup.string().email('Este e-mail esta correto?').required('Campo Obrigatório'),
  password: yup.string().min(6, 'Não esta faltando alguma coisa?').required('Campo Obrigatório')
}).required()

export function SignIn() {
  const { COLORS } = useTheme()
  const { navigate } = useNavigation()

  const { control, handleSubmit, formState: { errors }} = useForm<IFormInputs>({
    defaultValues: defaultForm,
    resolver: yupResolver(schema),
    mode: 'onTouched',
    reValidateMode: 'onChange'
  })

  function onSubmit(data: IFormInputs) {
    console.log(data)
    navigate('Home')
  }

  function handleSignUp() {
    navigate('SignUp')
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SignInContainer>
        <Title>
          Sou<TitleBold>Junior</TitleBold>
        </Title>
        <Title type="subtitle">Entrar</Title>

        <ControlledInput
          control={control}
          name="user"
          placeholder="User"
          keyboardType="email-address"
          icon="user"
          error={errors.user}
        />

        <ControlledInput
          control={control}
          name="password"
          placeholder="Password"
          icon="lock"
          secureTextEntry
          autoCorrect={false}
          clearTextOnFocus
          error={errors.password}
        />

        <Buttons
          onPress={handleSubmit(onSubmit)}
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
    </TouchableWithoutFeedback>
  )
}
