import styled, { css } from "styled-components/native";

type TTitle = {
  type?: 'logo' | 'subtitle' | 'signup'
}

export const SignUpContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.COLORS.BACKGROUND};
  width: 100%;
  padding: 0 20px;
`

export const Title = styled.Text<TTitle>`
  color: ${props => props.theme.COLORS.PRIMARY_900};
  font-size: 45px;
  font-weight: ${props => props.theme.FONT_FAMILY.REGULAR};

  
  ${({type}) => type === 'subtitle' && css`
    margin-top: 8px;
    margin-bottom: 28px;
    font-size: 26px;
    color: ${props => props.theme.COLORS.TEXT};
  `}
  
  ${({type}) => type === 'signup' && css`
    text-decoration: underline;
    margin-top: 27px;
    font-size: ${props => props.theme.FONT_SIZE.NORMAL2};
    color: ${props => props.theme.COLORS.TEXT2};
  `}
`

export const TitleBold = styled.Text`
  color: ${props => props.theme.COLORS.PRIMARY_900};
  font-size: 45px;
  font-weight: ${props => props.theme.FONT_FAMILY.BOLD};
`

export const TermsAcept = styled.Pressable`
  padding: 20px 0 10px 2px;
  flex-direction: row;
  align-items: center;
  align-self: flex-start;
`

export const TermsText = styled.Text`
  font-size: ${props => props.theme.FONT_SIZE.SMALL};
`

export const TermsLine = styled.Text`
  color: ${props => props.theme.COLORS.PRIMARY_900};
  text-decoration: underline;
`

export const Line1 = styled.View`
  height: 1px;
  background-color: ${props => props.theme.COLORS.BORDER4};
  width: 100%;
`