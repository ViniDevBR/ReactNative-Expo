import styled, { css } from 'styled-components/native'

type TTitle = {
  type?: 'logo' | 'subtitle' | 'signup'
}

export const TouchableWithoutFeedback = styled.TouchableWithoutFeedback`
  flex: 1;
`

export const ScrollView = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`

export const SignInContainer = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  width: 100%;
  padding: 120px 20px 90px;
`

export const Title = styled.Text<TTitle>`
  color: ${(props) => props.theme.COLORS.PRIMARY_900};
  font-size: 45px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.INTER_REGULAR};
  ${({ type }) =>
    type === 'subtitle' &&
    css`
      margin-top: 8px;
      margin-bottom: 28px;
      font-size: ${(props) => props.theme.FONT_SIZE.GIANT};
      color: ${(props) => props.theme.COLORS.TEXT};
    `}

  ${({ type }) =>
    type === 'signup' &&
    css`
      text-decoration: underline;
      margin-top: 27px;
      font-size: ${(props) => props.theme.FONT_SIZE.NORMAL2};
      color: ${(props) => props.theme.COLORS.TEXT2};
    `}
`

export const TitleBold = styled.Text`
  color: ${(props) => props.theme.COLORS.PRIMARY_900};
  font-size: 45px;
  font-weight: ${(props) => props.theme.FONT_WEIGHT};
`

export const TermsAcept = styled.Pressable`
  margin-top: 7px;
  margin-bottom: 25px;
  flex-direction: row;
  align-items: center;
  align-self: flex-start;
`

export const TermsText = styled.Text`
  font-size: ${(props) => props.theme.FONT_SIZE.SMALL};
`

export const TermsLine = styled.Text`
  color: ${(props) => props.theme.COLORS.PRIMARY_900};
  text-decoration: underline;
`

export const LinesContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const Line1 = styled.View`
  flex: 1;
  height: 1px;
  background-color: ${(props) => props.theme.COLORS.BORDER4};
`

export const TextOU = styled.Text`
  color: ${(props) => props.theme.COLORS.BORDER4};
  text-align: center;
  margin: 0 10px;
`
