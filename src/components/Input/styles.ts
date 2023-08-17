import { TextInput } from 'react-native'
import styled, { css } from 'styled-components/native'
interface Props {
  isFocused: boolean
}

export const InputContainer = styled.View<Props>`
  background-color: ${(props) => props.theme.COLORS.BACKGROUND};
  width: 100%;
  padding: 14px 10px;
  margin: 10px 0px;
  border-width: 1px;
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-color: ${(props) =>
    !props.focusable
      ? props.theme.COLORS.BORDER_INPUT
      : props.theme.COLORS.PRIMARY_900};

  ${({ isFocused }) =>
    isFocused &&
    css`
      border-width: 2px;
      border-color: ${(props) => props.theme.COLORS.PRIMARY_900};
    `};
`

export const IconContainer = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  margin-right: 2px;
  background-color: transparent;
`

export const InputText = styled(TextInput)<Props>`
  flex: 1;
  background-color: #ffffff;
  color: ${(props) => props.theme.COLORS.PLACEHOLDER};
  font-size: ${({ theme }) => theme.FONT_SIZE.NORMAL2};
  background-color: transparent;
`

export const ErrorText = styled.Text<Props>`
  color: ${(props) => props.theme.COLORS.NOTIFICATION};
  font-size: ${({ theme }) => theme.FONT_SIZE.SMALL};
  font-weight: 400;
  align-self: flex-start;
`
