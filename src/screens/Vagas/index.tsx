//REACT
import { useState } from 'react'
import { View, Text, Modal, TouchableOpacity, Pressable } from 'react-native'
//SAFE AREA CONTEXT
import { SafeAreaView } from 'react-native-safe-area-context'
//COMPONENTS
import { Header } from '../../components/Header'
import { Background } from '../../components/Background'
import { Select } from '../../components/Selects'
import { ModalVagas } from '../../components/ModalVagas'
import { Buttons } from '../../components/Button'
//STYLES & ICONS
import { Content, DivContainer, Results, ContainerButtons } from './styles'
import { Check, Plus } from 'phosphor-react-native'

export function Vagas() {
  const [modalData, setModalData] = useState<boolean>(false)
  const [modalType, setModalType] = useState<boolean>(false)
  const [modalEXP, setModalEXP] = useState<boolean>(false)
  const [click, setClick] = useState<boolean>(false)

  function handleClick() {
    setClick(!click)

  }
  return (
    <Background>
      <SafeAreaView style={{ flex: 1 }}>
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
            title='Data do anúncio'
            exit={() => setModalData(!modalData)}
            exitTitle='Exibir 1mil+ resultados'
            buttons={
              <ContainerButtons>
                <Buttons title='A qualquer momento'/>
                <Buttons title='Última mês'/>
                <Buttons title='Últimas 24 horas'/>
                <Buttons title='Última semana'/>
              </ContainerButtons>
            }
          />
          <ModalVagas 
            visible={modalType}
            backButton={() => setModalType(!modalType)}
            overlay={() => setModalType(!modalType)}
            title='Tipo de vaga'
            exit={() => setModalType(!modalType)}
            exitTitle='Exibir 1mil+ resultados'
            buttons={
              <ContainerButtons>
                <Buttons
                  onPress={handleClick} 
                  icon={click === false ? 
                    <Plus size={16} color="#444343" weight="bold" />  :
                    <Check size={16} color="#FFFFFF" weight="bold" />
                  }
                  type={click === true ? 'selected': undefined}
                  title='A qualquer momento'/>
                <Buttons
                  onPress={() => setClick(!click)} 
                  icon={<Check size={16} color="#2e0be0" weight="thin" />}
                  title='Última mês'/>
                <Buttons 
                  onPress={() => setClick(!click)}
                  icon={<Check size={16} color="#2e0be0" weight="thin" />}
                  title='Últimas 24 horas'/>
                <Buttons 
                  onPress={() => setClick(!click)}
                  icon={<Check size={16} color="#2e0be0" weight="thin" />}
                  title='Última semana'/>
              </ContainerButtons>
            }
          />
          <ModalVagas 
            visible={modalEXP}
            backButton={() => setModalEXP(!modalEXP)}
            overlay={() => setModalEXP(!modalEXP)}
            title='Nível de experiência'
            exit={() => setModalEXP(!modalEXP)}
            exitTitle='Exibir 1mil+ resultados'
            buttons={
              <ContainerButtons>
                <Buttons type='selected' title='A qualquer momento'/>
                <Buttons title='Última mês'/>
                <Buttons title='Últimas 24 horas'/>
                <Buttons title='Última semana'/>
              </ContainerButtons>
            }
          />
        </DivContainer>

        <Content>
          <Results>1.215 Resultados</Results>
        </Content>
      </SafeAreaView>
    </Background>
  )
}
