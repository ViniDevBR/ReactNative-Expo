import styled, { css } from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

export const TouchableWithoutFeedback = styled.TouchableWithoutFeedback`
  flex: 1;
`

export const ScrollView = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`

export const SignInContainer = styled.KeyboardAvoidingView`
flex: 1;
display: flex;
align-items: center;
justify-content: center;
background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
width: 100%;
height: 100%;
padding: 120px 20px 90px;
`


export const Logo = styled.Image`
  width: ${RFValue(274)}px;
  height: ${RFValue(43)}px;
`

export const PortalText = styled.Text`
color: ${(props) => props.theme.COLORS.PRIMARY_900};
font-size: ${RFValue(22)}px;
font-weight: ${(props) => props.theme.FONT_WEIGHT.SEMI_BOLD};
letter-spacing: 0.1px;
margin-bottom: ${RFValue(200)}px;
`