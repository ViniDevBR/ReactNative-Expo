import styled, { css } from 'styled-components/native'

type TInfos = {
  type?: 'subtitle' | 'others' | 'level' | 'time'
}

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  padding: 14px;
  border: 1px;
  border-color: ${props => props.theme.COLORS.BORDER5};
  margin: 10px 0;
  justify-content: center;
`

export const Img = styled.Image`
  width: 40px;
  height: 40px;
`

export const Infos = styled.View``

export const Header = styled.View`
  justify-content: space-between;
  flex-direction: row;
`

export const InfosDetailed = styled.Text<TInfos>`
  color: ${props => props.theme.COLORS.TEXT3};
  font-size: ${props => props.theme.FONT_SIZE.NORMAL2};
  font-weight: ${props => props.theme.FONT_FAMILY.SEMI_BOLD};
  padding-left: 10px;
  padding-bottom: 4px;
  text-transform: capitalize;
  align-items: center;

  ${props => props.type === 'subtitle' && css`
    font-size: ${props => props.theme.FONT_SIZE.SEMI_NORMAL};
    font-weight: ${props => props.theme.FONT_FAMILY.MEDIUM};
  `}

  ${props => props.type === 'others' && css`
    font-size: ${props => props.theme.FONT_SIZE.SEMI_NORMAL};
    font-weight: ${props => props.theme.FONT_FAMILY.REGULAR};
  `}

  ${props => props.type === 'level' && css`
    font-size: ${props => props.theme.FONT_SIZE.SEMI_NORMAL};
    font-weight: ${props => props.theme.FONT_FAMILY.REGULAR};
    text-transform: uppercase;
  `}

  ${props => props.type === 'time' && css`
    font-size: ${props => props.theme.FONT_SIZE.SEMI_NORMAL};
  `}
`
