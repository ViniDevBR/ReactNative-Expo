//STYLED COMPONENTS
import { Container, Img, Infos, InfosDetailed, Header } from './styles'
//NAVIGATION
import { useNavigation } from '@react-navigation/native'

export interface IJobCard {
  screenDetails: string
  id: string
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
    navigate('DetailsVaga', { id: props.screenDetails })
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
