import { Container, Img, Infos, InfosDetailed, Header } from './styles'
import JobCardImg from '../../assets/JobCard.png'
import { ImageSourcePropType } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export interface IJobCard {
  details?: any
  id?: string
  time: string
  title: string
  subtitle: string
  location: string
  level: string
  img: string
}

export function JobCard(props: IJobCard) {
  const { navigate } = useNavigation()

  function handleDetails() {
    navigate('DetailsVaga', { id: props.details })
  }

  return (
    <Container onPress={handleDetails}>
      <Img source={{ uri: props.img }} />

      <Infos>
        <Header>
          <InfosDetailed>{props.title}</InfosDetailed>
          <InfosDetailed type="time">{props.time}</InfosDetailed>
        </Header>
        <InfosDetailed type="subtitle">{props.subtitle}</InfosDetailed>
        <InfosDetailed type="others">{props.location}</InfosDetailed>
        <InfosDetailed type="level">{props.level}</InfosDetailed>
      </Infos>
    </Container>
  )
}
