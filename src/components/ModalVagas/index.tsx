import { Modal } from 'react-native'
import { Buttons } from '../Button'
import { ModalContainer, Overlay, ModalView, ModalText } from './styles'


interface Props {
  visible: boolean
  backButton: VoidFunction
  overlay: VoidFunction
  title: string
  exit: VoidFunction
  exitTitle: string
  buttons: any
}

export function ModalVagas(props: Props) {
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
          <ModalText>{props.title}</ModalText>

          {props.buttons}

          <Buttons type='close' title={props.exitTitle} onPress={props.exit}/>
        </ModalView>
      </ModalContainer>
    </Modal>
  )
}
