//REACT
import { useState, useCallback } from 'react'
import { BackHandler } from 'react-native'
//SAFE AREA CONTEXT
import { SafeAreaView } from 'react-native-safe-area-context'
//COMPONENTS
import { Header } from '../../components/Header'
import { Select } from '../../components/Selects'
import { ModalVagas } from '../../components/ModalVagas'
import { Buttons } from '../../components/Button'
import { IJobCard, JobCard } from '../../components/JobCard'
//STYLES & ICONS
import { ContentList, DivContainer, Results, ContainerButtons } from './styles'
import { Check, Plus } from 'phosphor-react-native'
import { useTheme } from 'styled-components'
//NAVIGATION
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import { globalUrl } from '../../localServer'

export function Vagas() {
  const { COLORS } = useTheme()
  const { navigate } = useNavigation()

  const [jobInfos, setJobInfos] = useState<IJobCard[]>([])

  const [modalData, setModalData] = useState<boolean>(false)
  const [modalType, setModalType] = useState<boolean>(false)
  const [modalEXP, setModalEXP] = useState<boolean>(false)

  const [clickWeek, setClickWeek] = useState<boolean>(false)
  const [clickMonth, setClickMonth] = useState<boolean>(false)
  const [click24h, setClick24h] = useState<boolean>(false)
  const [clickAny, setClickAny] = useState<boolean>(false)

  const [clickFull, setClickFull] = useState<boolean>(false)
  const [clickTemp, setClickTemp] = useState<boolean>(false)
  const [clickStage, setClickStage] = useState<boolean>(false)

  const [clickJR, setClickJR] = useState<boolean>(false)
  const [clickPL, setClickPL] = useState<boolean>(false)
  const [clickSR, setClickSR] = useState<boolean>(false)

  function handleClickAny() {
    setClickAny(!clickAny)
  }
  function handleClickMonth() {
    setClickMonth(!clickMonth)
  }
  function handleClick24() {
    setClick24h(!click24h)
  }
  function handleClickWeek() {
    setClickWeek(!clickWeek)
  }

  function handleClickFull() {
    setClickFull(!clickFull)
  }
  function handleClickTemp() {
    setClickTemp(!clickTemp)
  }
  function handleClickStage() {
    setClickStage(!clickStage)
  }

  function handleClickJR() {
    setClickJR(!clickJR)
  }
  function handleClickPL() {
    setClickPL(!clickPL)
  }
  function handleClickSR() {
    setClickSR(!clickSR)
  }

  useFocusEffect(
    useCallback(() => {
      fetch(`${globalUrl}/vagas`)
        .then((response) => response.json())
        .then((data) => setJobInfos(data))
    }, [])
  )

  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        navigate('Home')
        return true
      }

      const subscription = BackHandler.addEventListener(
        'hardwareBackPress',
        onBackPress
      )
      return () => subscription.remove()
    }, [])
  )

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.BACKGROUND }}>
      <DivContainer>
        <Header />
        <Select
          openData={() => setModalData(!modalData)}
          openEXP={() => setModalEXP(!modalEXP)}
          openType={() => setModalType(!modalType)}
        />
      </DivContainer>

      <DivContainer>
        <ModalVagas
          visible={modalData}
          backButton={() => setModalData(!modalData)}
          overlay={() => setModalData(!modalData)}
          title="Data do anúncio"
          exit={() => setModalData(!modalData)}
          exitTitle="Exibir 1mil+ resultados"
          buttons={
            <ContainerButtons>
              <Buttons
                onPress={handleClickAny}
                emptyBox={false}
                iconRight={
                  clickAny === false ? (
                    <Plus size={14} color={COLORS.PLACEHOLDER} weight="bold" />
                  ) : (
                    <Check size={14} color={COLORS.BACKGROUND} weight="bold" />
                  )
                }
                type={clickAny === true ? 'selected' : undefined}
                title="A qualquer momento"
              />
              <Buttons
                onPress={handleClickMonth}
                emptyBox={false}
                iconRight={
                  clickMonth === false ? (
                    <Plus size={14} color={COLORS.PLACEHOLDER} weight="bold" />
                  ) : (
                    <Check size={14} color={COLORS.BACKGROUND} weight="bold" />
                  )
                }
                type={clickMonth === true ? 'selected' : undefined}
                title="Última mês"
              />
              <Buttons
                onPress={handleClick24}
                emptyBox={false}
                iconRight={
                  click24h === false ? (
                    <Plus size={14} color={COLORS.PLACEHOLDER} weight="bold" />
                  ) : (
                    <Check size={14} color={COLORS.BACKGROUND} weight="bold" />
                  )
                }
                type={click24h === true ? 'selected' : undefined}
                title="Últimas 24 horas"
              />
              <Buttons
                onPress={handleClickWeek}
                emptyBox={false}
                iconRight={
                  clickWeek === false ? (
                    <Plus size={14} color={COLORS.PLACEHOLDER} weight="bold" />
                  ) : (
                    <Check size={14} color={COLORS.BACKGROUND} weight="bold" />
                  )
                }
                type={clickWeek === true ? 'selected' : undefined}
                title="Última semana"
              />
            </ContainerButtons>
          }
        />
        <ModalVagas
          visible={modalType}
          backButton={() => setModalType(!modalType)}
          overlay={() => setModalType(!modalType)}
          title="Tipo de vaga"
          exit={() => setModalType(!modalType)}
          exitTitle="Exibir 1mil+ resultados"
          buttons={
            <ContainerButtons>
              <Buttons
                onPress={handleClickFull}
                emptyBox={false}
                iconRight={
                  clickFull === false ? (
                    <Plus size={14} color={COLORS.PLACEHOLDER} weight="bold" />
                  ) : (
                    <Check size={14} color={COLORS.BACKGROUND} weight="bold" />
                  )
                }
                type={clickFull === true ? 'selected' : undefined}
                title="Tempo integral"
              />
              <Buttons
                onPress={handleClickTemp}
                emptyBox={false}
                iconRight={
                  clickTemp === false ? (
                    <Plus size={14} color={COLORS.PLACEHOLDER} weight="bold" />
                  ) : (
                    <Check size={14} color={COLORS.BACKGROUND} weight="bold" />
                  )
                }
                type={clickTemp === true ? 'selected' : undefined}
                title="Temporario"
              />
              <Buttons
                onPress={handleClickStage}
                emptyBox={false}
                iconRight={
                  clickStage === false ? (
                    <Plus size={14} color={COLORS.PLACEHOLDER} weight="bold" />
                  ) : (
                    <Check size={14} color={COLORS.BACKGROUND} weight="bold" />
                  )
                }
                type={clickStage === true ? 'selected' : undefined}
                title="Estagio"
              />
            </ContainerButtons>
          }
        />
        <ModalVagas
          visible={modalEXP}
          backButton={() => setModalEXP(!modalEXP)}
          overlay={() => setModalEXP(!modalEXP)}
          title="Nível de experiência"
          exit={() => setModalEXP(!modalEXP)}
          exitTitle="Exibir 1mil+ resultados"
          buttons={
            <ContainerButtons>
              <Buttons
                onPress={handleClickJR}
                emptyBox={false}
                iconRight={
                  clickJR === false ? (
                    <Plus size={14} color={COLORS.PLACEHOLDER} weight="bold" />
                  ) : (
                    <Check size={14} color={COLORS.BACKGROUND} weight="bold" />
                  )
                }
                type={clickJR === true ? 'selected' : undefined}
                title="Junior"
              />
              <Buttons
                onPress={handleClickPL}
                emptyBox={false}
                iconRight={
                  clickPL === false ? (
                    <Plus size={14} color={COLORS.PLACEHOLDER} weight="bold" />
                  ) : (
                    <Check size={14} color={COLORS.BACKGROUND} weight="bold" />
                  )
                }
                type={clickPL === true ? 'selected' : undefined}
                title="Pleno"
              />
              <Buttons
                onPress={handleClickSR}
                emptyBox={false}
                iconRight={
                  clickSR === false ? (
                    <Plus size={14} color={COLORS.PLACEHOLDER} weight="bold" />
                  ) : (
                    <Check size={14} color={COLORS.BACKGROUND} weight="bold" />
                  )
                }
                type={clickSR === true ? 'selected' : undefined}
                title="Senior"
              />
            </ContainerButtons>
          }
        />
      </DivContainer>

      <Results>1.215 Resultados</Results>
      <ContentList
        data={jobInfos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <JobCard
              id={item.id}
              screenDetails={item.id}
              img={item.img}
              title={item.title}
              subtitle={item.subtitle}
              location={item.location}
              level={item.level}
              time={item.time}
            />
          )
        }}
      />
    </SafeAreaView>
  )
}
