//REACT
import { FlatList, FlatListProps } from 'react-native'
//STYLED COMPONENTS && INTERFACES
import styled from 'styled-components/native'
import { IJobCard } from '../../components/JobCard'

export const DivContainer = styled.View``

export const ContentList = styled(FlatList as new (props: FlatListProps<IJobCard>) => FlatList<IJobCard>).attrs({
  contentContainerStyle: {
    paddingBottom: 100
  }})`

  padding: 0 5px;
`

export const Results = styled.Text`
  background-color: ${({theme}) => theme.COLORS.RESULTS};
  padding: 10px 0 5px 10px;
  color: ${({theme}) => theme.COLORS.TEXT};
  border-top-width: 5px;
  border-top-color: ${({theme}) => theme.COLORS.BORDER};
`

export const ContainerButtons = styled.View`
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`