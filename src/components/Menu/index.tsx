//REACT
import { Modal, TouchableOpacity } from 'react-native'
import { useState } from 'react'
//NAVIGATION
import { useNavigation } from '@react-navigation/native'
//STYLES & PHOSPHOR ICONS & HOOK
import { ModalContainer, Overlay, ModalView, ModalText, ModalTitle, BackButton, EmptyBox, Options, ItemMenu } from './styles'
import { CaretLeft } from 'phosphor-react-native'
import { useHeader } from '../../hooks/useHeader'
//COMPONENTE
import { LogOut } from '../LogOut'

interface Props {
  visible: boolean
  backButton: VoidFunction
  overlay: VoidFunction
}

export function Menu(props: Props) {
  const { navigate } = useNavigation()
  const { isMenuOpen, setIsMenuOpen } = useHeader()
  
  const [logOut, setLogOut] = useState<boolean>(false)

  function handleMenuHome() {
    navigate('Home')
    setIsMenuOpen(!isMenuOpen)
  }
  function handleMenuLocal() {
    navigate('Location')
    setIsMenuOpen(!isMenuOpen)
  }
  function handleMenuAdd() {
    navigate('Add')
    setIsMenuOpen(!isMenuOpen)
  }
  function handleMenuUser() {
    navigate('User')
    setIsMenuOpen(!isMenuOpen)
  }
  function handleMenuVagas() {
    navigate('Vagas')
    setIsMenuOpen(!isMenuOpen)
  }
  function handleLogOutConfirm() {
    setLogOut(!logOut)
  }
  function handleLogOut() {
    navigate('SignIn')
    setIsMenuOpen(!isMenuOpen)
    setLogOut(!LogOut)
  }
  function handleTheme() {

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
            
            <TouchableOpacity onPress={handleTheme}>
              <ItemMenu>Mudar Tema</ItemMenu>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleLogOutConfirm}>
              <ItemMenu>SAIR</ItemMenu>
            </TouchableOpacity>
          </Options>
        </ModalView>
      </ModalContainer>

      <LogOut
        backButton={handleLogOutConfirm}
        overlay={handleLogOutConfirm}
        visible={logOut}
        yesConfirm={handleLogOut}
      />
    </Modal>
  )
}
