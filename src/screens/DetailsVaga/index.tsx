//REACT
import { useState, useEffect, useCallback, useRef } from 'react'
import { View, ScrollView } from 'react-native'
//STYLES && ICONS
import { Entypo } from '@expo/vector-icons'
import { DetailsContainer, InfosDetail, Img, HeaderInfos, TypeOfVaga, DetailsOfType, ScrollContent, Description, DescriptionText, GoBack, ButtonsContainer, Header, HeaderTitle, EmptyBox } from './styles'
//NAVIGATION
import { useRoute, useNavigation, useFocusEffect } from '@react-navigation/native'
import { globalUrl } from '../../localServer'
//COMPONENTS
import { IJobCard } from '../../components/JobCard'
import { Buttons } from '../../components/Button'

interface RouteParams {
  id: string
}

interface IJobDetails extends IJobCard {
  type: string
  numberOfEmployers: string
  status: string
  description: {
    resume: string
    tasksTitle: string
    tasksDescription: string
    stacksTitle: string
    stacksDescription: string
    benefitsTitle: string
    benefitsDescription: string
  }
}

export function DetailsVaga() {
  const [jobDetail, setJobDetail] = useState<IJobDetails>({} as IJobDetails)

  const { params } = useRoute()
  const { navigate } = useNavigation()
  const { id } = params as RouteParams

  const scrollViewRef = useRef<ScrollView>(null)

  function handleGoBackVagas() {
    navigate('Vagas')
  }

  useEffect(() => {
    fetch(`${globalUrl}/vagas/${id}`)
      .then(response => response.json())
      .then(data => setJobDetail(data))
  }, [id])

  useFocusEffect(
    useCallback(() => {
      scrollViewRef.current?.scrollTo({ x: 0, y: 0, animated: false })
    }, [scrollViewRef])
  )

  return (
    <DetailsContainer>
      <ScrollContent ref={scrollViewRef}>
        <Header>
          <GoBack onPress={handleGoBackVagas}>
            <Entypo name="chevron-left" size={32} color="black" />
          </GoBack>
          <HeaderTitle>Detalhes da Vaga</HeaderTitle>
          <EmptyBox />
        </Header>

        <View style={{ paddingHorizontal: 19 }}>
          <HeaderInfos>
            <InfosDetail>{jobDetail.title}</InfosDetail>
            <Img source={{ uri: jobDetail.img }} />
          </HeaderInfos>

          <InfosDetail type="subtitle">{jobDetail.subtitle}</InfosDetail>
          <InfosDetail type="location">{jobDetail.location}</InfosDetail>
          <InfosDetail type="level">{jobDetail.level}</InfosDetail>
        </View>

        <TypeOfVaga>
          <DetailsOfType>{jobDetail.type}</DetailsOfType>
          <DetailsOfType>
            {jobDetail.numberOfEmployers} funcionários
          </DetailsOfType>
          <DetailsOfType variation="blue">{jobDetail.status}</DetailsOfType>
        </TypeOfVaga>

        <Description>
          <DescriptionText>
            {jobDetail?.description?.resume}
            {'\n\n'}
            {jobDetail?.description?.tasksTitle}
            {'\n'}
            {jobDetail?.description?.tasksDescription}
            {'\n\n'}
            {jobDetail?.description?.stacksTitle}
            {'\n'}
            {jobDetail?.description?.stacksDescription}
            {'\n\n'}
            {jobDetail?.description?.benefitsTitle}
            {'\n'}
            {jobDetail?.description?.benefitsDescription}
            {'\n'}
          </DescriptionText>
        </Description>

        <ButtonsContainer>
          <Buttons type="signin" title="Se inscrever" />
          <Buttons onPress={handleGoBackVagas} type="linkedin" title="Voltar" />
        </ButtonsContainer>
      </ScrollContent>
    </DetailsContainer>
  )
}
