//REACT
import { Keyboard, Platform } from 'react-native'
//STYLES && ICONS
import {
  SignInContainer,
  TouchableWithoutFeedback,
  ScrollView,
  Logo,
  PortalText,
} from './styles'

//CONTROLLER
import { Buttons } from '../../components/Button'
import {
  navigateHomeAnonymous,
  navigateSignIn,
  navigateSignUp,
} from './controllers/access.controller'
import { useNavigation } from '@react-navigation/native'
import logo from '../../../assets/logo.png'

export function Access() {
  const { navigate } = useNavigation()
  const isSubmitting = false

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView>
        <SignInContainer
          behavior={Platform.OS === 'android' ? 'height' : 'padding'}
        >
          <Logo source={logo} />
          <PortalText>Portal de vagas</PortalText>

          <Buttons
            onPress={() => navigateSignUp(navigate)}
            isLoading={isSubmitting}
            type="signup"
            title="Cadastre-se"
          />
          <Buttons
            onPress={() => navigateSignIn(navigate)}
            isLoading={isSubmitting}
            type="signin"
            title="Fazer login"
          />

          <Buttons
            onPress={() => navigateHomeAnonymous(navigate)}
            isLoading={isSubmitting}
            type="anonymous"
            title="Ver vagas sem logar"
          />
        </SignInContainer>
      </ScrollView>
    </TouchableWithoutFeedback>
  )
}
