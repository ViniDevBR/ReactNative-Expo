//REACT
import { ReactElement } from 'react'
import { Modal } from 'react-native'
//COMPONENTE
import { Buttons } from '../Button'
//STYLE
import { ModalContainer, Overlay, ModalView, ModalText } from './styles'

interface Props {
  visible: boolean
  backButton: VoidFunction
  overlay: VoidFunction
  title: string
  exit: VoidFunction
  exitTitle: string
  buttons: ReactElement
}

export function ModalVagas(props: Props) {
  return (
    <Modal
      animationType='fade'
      transparent={true}
      visible={props.visible}
      onRequestClose={props.backButton}
    >
      <ModalContainer>
        <Overlay onPress={props.overlay} />
        <ModalView style={{ elevation: 30 }}>
          <ModalText>{props.title}</ModalText>

          {props.buttons}

          <Buttons type='close' title={props.exitTitle} onPress={props.exit} />
        </ModalView>
      </ModalContainer>
    </Modal>
  )
}
