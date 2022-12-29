import styled from 'styled-components/native'

export const ModalContainer = styled.View`
  flex: 1;
  flex-direction: row;
  background-color: transparent;
`

export const Overlay = styled.Pressable`
  flex: 1;
  width: 100%;
  background-color: #b0b0b0aa;
  align-items: center;
  justify-content: center;
`

export const ModalView = styled.View`
  width: 80%;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`

export const ModalTitle = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.COLORS.PRIMARY_700};
`

export const ModalText = styled.Text`
  color: ${props => props.theme.COLORS.TEXT};
  text-align: center;
  font-weight: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.BIG};
  padding: 15.5px 0;
`

export const BackButton = styled.TouchableOpacity``

export const Options = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`

export const ItemMenu = styled.Text`
  font-size: ${props => props.theme.FONT_SIZE.BIG};
  padding: 10px 0 10px 0;
`
