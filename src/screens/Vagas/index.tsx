//REACT
import { useState } from 'react'
import { View, Text, Modal, TouchableOpacity } from 'react-native'
//SAFE AREA CONTEXT
import { SafeAreaView } from 'react-native-safe-area-context'
//COMPONENTS
import { Header } from '../../components/Header'
import { Background } from '../../components/Background'
import { Select } from '../../components/Selects'
//STYLES
import { styles } from './styles'


export function Vagas() {
  const [modalData, setModalData] = useState<boolean>(false)
  const [modalType, setModalType] = useState<boolean>(false)
  const [modalEXP, setModalEXP] = useState<boolean>(false)

  return (
    <Background>
      <SafeAreaView>
        <View>
          <Header />
          <Select 
            openData={() => setModalData(!modalData)} 
            openEXP={() => setModalEXP(!modalEXP)} 
            openType={() => setModalType(!modalType)}
          />
          <Text>VAGAS</Text>


          <Modal
            animationType="fade"
            transparent={true}
            visible={modalData}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Data do anúncio</Text>

                <View style={styles.centeredView2}>
                  <TouchableOpacity 
                    style={[styles.buttonOptions, 
                      {backgroundColor: modalData ? '#008000': '#000'},
                      {borderColor: modalData ? '#008000': ""}]}
                  >
                    <Text style={{color: modalData ? '#fff':'#000'}}>
                      A qualquer momento
                    </Text>  
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.buttonOptions}>
                    <Text>
                      Última semana
                    </Text>  
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.buttonOptions}>
                    <Text>
                      Último mês
                    </Text>  
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.buttonOptions}>
                    <Text>
                      Últimas 24 horas
                    </Text>  
                  </TouchableOpacity>
                </View>

                <TouchableOpacity
                  style={styles.buttonClose}
                  onPress={() => setModalData(!modalData)}
                >
                  <Text style={styles.textStyle}>Exibir 1mil+ resultados</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>


          <Modal
            animationType="fade"
            transparent={true}
            visible={modalType}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Tipo de vaga</Text>

                <View style={styles.centeredView2}>
                  <TouchableOpacity 
                    style={[styles.buttonOptions, 
                      {backgroundColor: modalType ? '#008000': '#000'},
                      {borderColor: modalType ? '#008000': ""}]}
                  >
                    <Text style={{color: modalType ? '#fff':'#000'}}>
                      Tempo integral
                    </Text>  
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.buttonOptions}>
                    <Text>
                      Meio Periodo
                    </Text>  
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.buttonOptions}>
                    <Text>
                      Temporario
                    </Text>  
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.buttonOptions}>
                    <Text>
                      Estagio
                    </Text>  
                  </TouchableOpacity>
                </View>

                <TouchableOpacity
                  style={styles.buttonClose}
                  onPress={() => setModalType(!modalType)}
                >
                  <Text style={styles.textStyle}>Exibir 1mil+ resultados</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>


          <Modal
            animationType="fade"
            transparent={true}
            visible={modalEXP}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Nivel de experiência</Text>

                <View style={styles.centeredView2}>
                  <TouchableOpacity 
                    style={[styles.buttonOptions, 
                      {backgroundColor: modalEXP ? '#008000': '#000'},
                      {borderColor: modalEXP ? '#008000': ""}]}
                  >
                    <Text style={{color: modalEXP ? '#fff':'#000'}}>
                      Tempo integral
                    </Text>  
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.buttonOptions}>
                    <Text>
                      Meio Periodo
                    </Text>  
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.buttonOptions}>
                    <Text>
                      Temporario
                    </Text>  
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.buttonOptions}>
                    <Text>
                      Estagio
                    </Text>  
                  </TouchableOpacity>
                </View>

                <TouchableOpacity
                  style={styles.buttonClose}
                  onPress={() => setModalEXP(!modalEXP)}
                >
                  <Text style={styles.textStyle}>Exibir 1mil+ resultados</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>


        </View>
      </SafeAreaView>
    </Background>
  )
}
