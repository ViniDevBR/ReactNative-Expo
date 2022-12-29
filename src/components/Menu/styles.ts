import styled from 'styled-components/native'

export const ModalContainer = styled.View`
  flex: 1;
  flex-direction: row;
  background-color: transparent;
`

export const Overlay = styled.Pressable`
  flex: 1;
  width: 20%;
  background-color: transparent;
`

export const ModalView = styled.View`
  width: 80%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`

export const ModalText = styled.Text`
  color: ${props => props.theme.COLORS.TEXT};
  text-align: center;
  font-weight: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.BIG};
  padding: 15.5px 0;
`

export const ModalTitle = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.COLORS.PRIMARY_700};
`

export const BackButton = styled.TouchableOpacity`
  padding: 0 20px;
`

export const EmptyBox = styled.View`
  width: 72px;
`

export const Options = styled.View``

export const ItemMenu = styled.Text`
  font-size: ${props => props.theme.FONT_SIZE.BIG};
  padding: 10px 0 10px 10px;
  border-bottom-width: 1px;
  border-bottom-color: #000;
`
