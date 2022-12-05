import { Container, Img, Infos, Time, InfosDetailed } from './styles'
import JobCardImg from '../../assets/JobCard.png'

 export interface Props {
  time: string
  title: string
  subtitle: string
  location: string
  level: string
  img: string
}

export function JobCard(props: Props) {
  return (
    <Container>
      <Img source={JobCardImg}/>

      <Infos>
        <InfosDetailed type='title'>
          UX Designer Junior
        </InfosDetailed>
        <InfosDetailed type='subtitle'>
          Empresa Verde
        </InfosDetailed>
        <InfosDetailed type='location'>
          Bento Gonçalves, Rio Grande do Sul, Brasil
        </InfosDetailed>
        <InfosDetailed type='level'> 
          REMOTO - JUNIOR - PJ
        </InfosDetailed>
      </Infos>
      <Time>
        Há 6h
      </Time>
    </Container>
  )
}