import styled, { css } from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

type TButton = {
  types?: string
}

export const ButtonContainer = styled.TouchableOpacity<TButton>`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_500};
  border: 1px solid ${({ theme }) => theme.COLORS.PRIMARY_700};
  border-radius: 10px;
  margin-right: 10px;
  margin: 0 10px 10px 0;
  padding: 10px 0;
  width:  60%;
  height: 50px;
  margin: 20px 0 10px 0;

  ${({ types }) =>
    types === 'close' &&
    css`
      background-color: ${({ theme }) => theme.COLORS.BUTTON_700};
      border: none;
      border-radius: 200px;
      width: 90%;
      margin-bottom: 20px;
      padding: 10px;
    `}

  ${({ types }) =>
    types === 'selected' &&
    css`
      background-color: ${({ theme }) => theme.COLORS.BUTTON_100};
      border: 1px solid ${({ theme }) => theme.COLORS.BUTTON_100};
    `}

  ${({ types }) =>
    types === 'signin' &&
    css`
      background-color: ${({ theme }) => theme.COLORS.PRIMARY_900};
      border: 1px solid ${({ theme }) => theme.COLORS.PRIMARY_900};
      border-radius: 100px;
    `}

  ${({ types }) =>
    types === 'signup' &&
    css`
      background-color: ${({ theme }) => theme.COLORS.WHITE};
      border: 1px solid ${({ theme }) => theme.COLORS.BORDER_INPUT};
      border-color: ${({ theme }) => theme.COLORS.BORDER_INPUT}; 
      border-radius: 100px;

  `}
  ${({ types }) =>
    types === 'anonymous' &&
    css`
      background-color: transparent;
      border: 0px;
  `}

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: ${({ theme }) => theme.COLORS.ICON};
      border: 1px solid ${({ theme }) => theme.COLORS.ICON};
    `}
`

export const Title = styled.Text<TButton>`
  color: ${({ theme }) => theme.COLORS.TEXT};
  text-align: center;
  justify-self: center;

  ${({ types }) =>
    types === 'close' &&
    css`
      color: ${({ theme }) => theme.COLORS.TEXT};
      font-size: ${({ theme }) => theme.FONT_SIZE.BIG};
    `}

  ${({ types }) =>
    types === 'selected' &&
    css`
      color: ${({ theme }) => theme.COLORS.BACKGROUND};
    `}

  ${({ types }) =>
    types === 'signin' &&
    css`
      color: ${({ theme }) => theme.COLORS.WHITE}; 
      font-size: ${RFValue(20)}px;
    `}

  ${({ types }) =>
    types === 'linkedin' &&
    css`
      color: ${({ theme }) => theme.COLORS.PRIMARY_900};
      font-size: ${({ theme }) => theme.FONT_SIZE.BIG};
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      color: ${({ theme }) => theme.COLORS.PLACEHOLDER};
    `}

  ${({ types }) =>
    types === 'signup' &&
    css`
      color: ${({ theme }) => theme.COLORS.PRIMARY_900}; 
      font-size: ${RFValue(20)}px;
  `}
  ${({ types }) =>
    types === 'anonymous' &&
    css`
      color: ${({ theme }) => theme.COLORS.PRIMARY_900}; 
      font-size: ${RFValue(17)}px;
      font-weight: ${({ theme }) => theme.FONT_WEIGHT.MEDIUM};
  `}
`

export const EmptyBox = styled.View`
  width: 24px;
`
