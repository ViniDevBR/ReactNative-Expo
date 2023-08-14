import { api } from '../../../localServer'
import { useNavigation } from '@react-navigation/native'
import { UserSignInput } from '../interfaces/interfaces'

export const useSignInController = () => {
  const { navigate } = useNavigation()

  function handleSignUp() {
    navigate('SignUp')
  }

  async function handleSignIn(user: UserSignInput): Promise<void> {
    try {
      const { data } = await api.get(
        `/users?email=${user.email}&password=${user.password}`
      )
      console.log(data)

      if (data.length && data[0].id) {
        navigate('Home')
        return
      }
    } catch (error) {
      console.log(error)
      return
    }
  }

  return {
    handleSignIn,
    handleSignUp,
  }
}
