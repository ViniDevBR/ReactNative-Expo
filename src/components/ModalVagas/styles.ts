import styled from 'styled-components/native'

export const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`

export const Overlay = styled.Pressable`
  flex: 1;
  width: 100%;
  background-color: transparent;
`

export const ModalView = styled.View`
  width: 100%;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  border-radius: 20px;
`

export const ModalText = styled.Text`
  color: ${props => props.theme.COLORS.TEXT};
  width: 100%;
  margin-bottom: 30px;
  text-align: center;
  font-weight: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.BIG};
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.COLORS.PRIMARY_700};
  padding: 20px 0;
`
