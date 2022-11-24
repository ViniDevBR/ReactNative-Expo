import styled from 'styled-components/native'


export const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => props.theme.COLORS.BACKGROUND};
  width: 100%;
  padding: 11px;
  border-bottom-width: 1px;
  border-bottom-color: ${({theme}) => theme.COLORS.PRIMARY_600};
`
export const Logo = styled.Text`
  color: ${({theme}) => theme.COLORS.PRIMARY_900};
`

export const LogoBold = styled.Text`
  font-weight: ${({theme}) => theme.FONT_FAMILY.BOLD};
`
