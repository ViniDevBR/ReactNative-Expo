import styled, { css } from "styled-components/native";

type TInfos = {
  type: 'title' | 'subtitle' | 'location' | 'level'
}

export const Container = styled.View`
  padding: 14px;
`

export const Img = styled.Image``

export const Infos = styled.View``

export const InfosDetailed = styled.Text<TInfos>`


  ${props => props.type === 'title' && css`
    
  `}
  ${props => props.type === 'subtitle' && css`

  `}
  ${props => props.type === 'location' && css`

  `}
  ${props => props.type === 'level' && css`

  `}
`

export const Time = styled.View`
  font-size: ${props => props.theme.FONT_SIZE.NORMAL};
`