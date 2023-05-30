import styled, { css } from 'styled-components/native'

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
  padding: 4.5px 13px;

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
      border: 1px solid ${({ theme }) => theme.COLORS.BORDER3};
      border-radius: 4px;
      height: 60px;
      margin: 20px 0 10px 0;
      width: 100%;
    `}

  ${({ types }) =>
    types === 'linkedin' &&
    css`
      background-color: transparent;
      border: 1px solid ${({ theme }) => theme.COLORS.PRIMARY_900};
      border-radius: 4px;
      height: 60px;
      margin: 10px 0 0 0;
      width: 100%;
      justify-content: space-evenly;
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
      color: ${({ theme }) => theme.COLORS.BACKGROUND};
      font-size: ${({ theme }) => theme.FONT_SIZE.BIG2};
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
`

export const EmptyBox = styled.View`
  width: 24px;
`
