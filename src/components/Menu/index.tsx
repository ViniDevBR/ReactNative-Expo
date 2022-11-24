import { Modal, TouchableOpacity, View, Text } from 'react-native'
import {
  ModalContainer,
  Overlay,
  ModalView,
  ModalText,
  ModalTitle,
  BackButton,
  EmptyBox,
  Options,
  ItemMenu
} from './styles'
import { Buttons } from '../Button'
import { CaretLeft } from 'phosphor-react-native'
import { useNavigation } from '@react-navigation/native'

interface Props {
  visible: boolean
  backButton: VoidFunction
  overlay: VoidFunction
  setState: any
}

export function Menu(props: Props) {
  const { navigate } = useNavigation()

  function handleMenuHome() {
    navigate('Home')
    {
      props.setState(props.visible)
    }
  }
  function handleMenuLocal() {
    navigate('Location')
    {
      props.setState(props.visible)
    }
  }
  function handleMenuAdd() {
    navigate('Add')
    {
      props.setState(props.visible)
    }
  }
  function handleMenuUser() {
    navigate('User')
    {
      props.setState(props.visible)
    }
  }
  function handleMenuVagas() {
    navigate('Vagas')
    {
      props.setState(props.visible)
    }
  }

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={props.visible}
      onRequestClose={props.backButton}
    >
      <ModalContainer>
        <Overlay onPress={props.overlay} />

        <ModalView>
          <ModalTitle>
            <BackButton onPress={props.backButton}>
              <CaretLeft size={32} color="#000" weight="regular" />
            </BackButton>

            <ModalText>Menu</ModalText>
            <EmptyBox />
          </ModalTitle>

          <Options>
            <TouchableOpacity onPress={handleMenuHome}>
              <ItemMenu>Inicio</ItemMenu>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleMenuLocal}>
              <ItemMenu>Local</ItemMenu>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleMenuAdd}>
              <ItemMenu>Adicionar</ItemMenu>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleMenuUser}>
              <ItemMenu>Perfil</ItemMenu>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleMenuVagas}>
              <ItemMenu>Vagas</ItemMenu>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleMenuVagas}>
              <ItemMenu>SAIR</ItemMenu>
            </TouchableOpacity>
          </Options>
        </ModalView>
      </ModalContainer>
    </Modal>
  )
}
