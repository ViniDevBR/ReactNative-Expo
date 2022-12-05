//REACT
import { View } from 'react-native'
import React, { useState } from 'react'
//SAFE AREA CONTEXT
import { SafeAreaView } from 'react-native-safe-area-context'
//COMPONENTS
import { Header } from '../../components/Header'
import { Select } from '../../components/Selects'
import { ModalVagas } from '../../components/ModalVagas'
import { Buttons } from '../../components/Button'
import { IJobCard, JobCard } from '../../components/JobCard'
//STYLES & ICONS
import { Content, DivContainer, Results, ContainerButtons } from './styles'
import { Check, Plus } from 'phosphor-react-native'
import { useTheme } from 'styled-components'

const JobInfosFromAPI = [
  {
    id: '1',
    img: 'https://reactnative.dev/img/tiny_logo.png',
    title: 'UX Designer Junior',
    subtitle: 'empresa verde alegre',
    location: 'Bento Gonçalves, Rio Grande do Sul, Brasil',
    level: 'REMOTO - JUNIOR - PJ',
    time: 'Há 6h'
  },
  {
    id: '2',
    img: 'https://logospng.org/download/javascript/logo-javascript-1024.png',
    title: 'Front End Developer',
    subtitle: 'Empresa Viva a Vida',
    location: 'Bento Gonçalves, Rio Grande do Sul, Brasil',
    level: 'REMOTO - JUNIOR - PJ',
    time: 'Há 6h'
  },
  {
    id: '3',
    img: 'https://w7.pngwing.com/pngs/915/519/png-transparent-typescript-hd-logo-thumbnail.png',
    title: 'Back End Developer',
    subtitle: 'Empresa LifeGeneration',
    location: 'Bento Gonçalves, Rio Grande do Sul, Brasil',
    level: 'REMOTO - JUNIOR - PJ',
    time: 'Há 6h'
  },
  {
    id: '4',
    img: 'https://www.styled-components.com/atom.png',
    title: 'Full Stack Developer',
    subtitle: 'Empresa DevOpsMaster',
    location: 'Bento Gonçalves, Rio Grande do Sul, Brasil',
    level: 'REMOTO - JUNIOR - PJ',
    time: 'Há 6h'
  },
  {
    id: '5',
    img: 'https://www.pngitem.com/pimgs/m/441-4411342_react-native-svg-logo-hd-png-download.png',
    title: 'Mobile Developer',
    subtitle: 'Empresa MobilesStates',
    location: 'Bento Gonçalves, Rio Grande do Sul, Brasil',
    level: 'REMOTO - JUNIOR - PJ',
    time: 'Há 6h'
  },
  {
    id: '6',
    img: 'https://ih1.redbubble.net/image.1800626835.5626/st,small,507x507-pad,600x600,f8f8f8.jpg',
    title: 'TailWind Specialist',
    subtitle: 'Empresa TailWind Tops',
    location: 'Bento Gonçalves, Rio Grande do Sul, Brasil',
    level: 'REMOTO - JUNIOR - PJ',
    time: 'Há 6h'
  }
]

export function Vagas() {
  const { COLORS } = useTheme()

  const [jobInfos, setJobInfos] = useState<IJobCard[]>(JobInfosFromAPI)

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

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.BACKGROUND2 }}>
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
                    <Check size={14} color={COLORS.BACKGROUND2} weight="bold" />
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
                    <Check size={14} color={COLORS.BACKGROUND2} weight="bold" />
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
                    <Check size={14} color={COLORS.BACKGROUND2} weight="bold" />
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
                    <Check size={14} color={COLORS.BACKGROUND2} weight="bold" />
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
                    <Check size={14} color={COLORS.BACKGROUND2} weight="bold" />
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
                    <Check size={14} color={COLORS.BACKGROUND2} weight="bold" />
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
                    <Check size={14} color={COLORS.BACKGROUND2} weight="bold" />
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
                    <Check size={14} color={COLORS.BACKGROUND2} weight="bold" />
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
                    <Check size={14} color={COLORS.BACKGROUND2} weight="bold" />
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
                    <Check size={14} color={COLORS.BACKGROUND2} weight="bold" />
                  )
                }
                type={clickSR === true ? 'selected' : undefined}
                title="Senior"
              />
            </ContainerButtons>
          }
        />
      </DivContainer>

      <Content>
        <Results>1.215 Resultados</Results>
        <View style={{ paddingHorizontal: 5 }}>
          {jobInfos.map(job => {
            return (
              <JobCard
                key={job.id}
                details={job.id}
                img={job.img}
                title={job.title}
                subtitle={job.subtitle}
                location={job.location}
                level={job.level}
                time={job.time}
              />
            )
          })}
        </View>
      </Content>
    </SafeAreaView>
  )
}
