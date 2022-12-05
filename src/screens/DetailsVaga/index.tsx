import {
  DetailsContainer,
  InfosDetail,
  Img,
  HeaderInfos,
  TypeOfVaga,
  DetailsOfType,
  ScrollContent,
  Description,
  DescriptionText,
  GoBack
} from './styles'
//NAVIGATION
import { useRoute } from '@react-navigation/native'
import { Pressable, View } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

interface RouteParams {
  id: string
}

export function DetailsVaga() {
  const { params } = useRoute()
  const { id } = params as RouteParams
  const { navigate } = useNavigation()

  function handleGoBackVagas() {
    navigate('Vagas')
  }

  return (
    <DetailsContainer>
      <ScrollContent>
        <View style={{ paddingHorizontal: 19 }}>
          <GoBack onPress={handleGoBackVagas}>
            <Entypo name="chevron-left" size={32} color="black" />
          </GoBack>
          <HeaderInfos>
            <InfosDetail>ux designer junior</InfosDetail>
            <Img
              source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
            />
          </HeaderInfos>

          <InfosDetail type="subtitle">empresa verde alegre</InfosDetail>
          <InfosDetail type="location">
            Bento Gonçalves, Rio Grande do Sul, Brasil
          </InfosDetail>
          <InfosDetail type="level">REMOTO - JUNIOR - PJ</InfosDetail>
        </View>

        <TypeOfVaga>
          <DetailsOfType>Tempo Integral</DetailsOfType>
          <DetailsOfType>51-200 funcionários</DetailsOfType>
          <DetailsOfType variation="blue">Recrutando agora</DetailsOfType>
        </TypeOfVaga>

        <Description>
          <DescriptionText>
            Procuramos um profissional para ocupar a posição de UX Designer em
            um cliente referência no setor de produção de imunobiológicos
            (vacinas) e análises laboratoriais veterinários.{'\n\n'}
            Culturalmente, procuramos uma pessoa que:{'\n'}- seja curiosa por
            natureza{'\n'}- perfil mão na massa e ágil{'\n'}- sabe ouvir e se
            comunicar{'\n'}- busca e tenha um histórico de aprendizado contínuo
            {'\n'}- busca e fomenta a colaboração, mas também tenha as suas -
            contribuições individuais inovadoras{'\n'}- entenda o objetivo e
            propósito da empresa, e consiga atuar com - autonomia dentro de suas
            responsabilidades{'\n\n'}
            Responsabilidades e atribuições:{'\n\n'}- Contribuir com o time de
            forma agil{'\n'}- Estar atento as mudanças solicitadas pelo cliente
            {'\n'}- Realizar call morning todo dia{'\n'}- Disponivel para horas
            extras{'\n'}
          </DescriptionText>
        </Description>
      </ScrollContent>
    </DetailsContainer>
  )
}
