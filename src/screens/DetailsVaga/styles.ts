import styled, { css } from 'styled-components/native'

type TInfos = {
  type?: 'subtitle' | 'location' | 'level'
  variation?: 'blue'
  description?: 'title'
}

export const Header = styled.View`
  padding: 0 19px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const HeaderTitle = styled.Text`
  color: ${(props) => props.theme.COLORS.TEXT3};
`

export const EmptyBox = styled.View`
  width: 42px;
`

export const GoBack = styled.TouchableOpacity`
  padding: 10px 10px 10px 0;
`

export const DetailsContainer = styled.View`
  margin-top: 20px;
  padding-top: 30px;
  justify-content: center;
  background-color: ${(props) => props.theme.COLORS.BACKGROUND};
`

export const ScrollContent = styled.ScrollView``

export const HeaderInfos = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const InfosDetail = styled.Text<TInfos>`
  font-size: ${(props) => props.theme.FONT_SIZE.EXTRA_BIG};
  font-weight: ${(props) => props.theme.FONT_WEIGHT.SEMI_BOLD};
  text-transform: capitalize;
  padding-bottom: 7px;

  ${(props) =>
    props.type === 'subtitle' &&
    css`
      font-size: ${(props) => props.theme.FONT_SIZE.NORMAL2};
      font-weight: ${(props) => props.theme.FONT_WEIGHT.MEDIUM};
    `}

  ${(props) =>
    props.type === 'location' &&
    css`
      font-size: ${(props) => props.theme.FONT_SIZE.SEMI_NORMAL};
      font-weight: ${(props) => props.theme.FONT_WEIGHT.REGULAR};
      padding-bottom: 30px;
    `}

  ${(props) =>
    props.type === 'level' &&
    css`
      font-size: ${(props) => props.theme.FONT_SIZE.SEMI_NORMAL};
      font-weight: ${(props) => props.theme.FONT_WEIGHT.MEDIUM};
      text-transform: uppercase;
    `}
`

export const Img = styled.Image`
  width: 30px;
  height: 30px;
`

export const TypeOfVaga = styled.View`
  border-width: 1px;
  border-color: ${(props) => props.theme.COLORS.BORDER5};
  border-radius: 6px;
  padding: 10px 7px;
  margin: 0 12px;
`

export const DetailsOfType = styled.Text<TInfos>`
  font-size: ${(props) => props.theme.FONT_SIZE.SEMI_NORMAL};
  font-weight: ${(props) => props.theme.FONT_WEIGHT.REGULAR};
  padding-bottom: 7px;

  ${(props) =>
    props.variation === 'blue' &&
    css`
      color: ${(props) => props.theme.COLORS.PRIMARY_900};
      padding: 0;
    `}
`

export const Description = styled.View`
  padding: 0 19px;
`

export const DescriptionText = styled.Text<TInfos>`
  padding: 10px 0;
`

export const ButtonsContainer = styled.View`
  width: 90%;
  align-self: center;
  margin-bottom: 30px;
`
