import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  centeredView2: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    marginBottom: 30
  },
  modalView: {
    width: '100%',
    backgroundColor: '#FFF',
    borderTopRightRadius: 20,
    borderTopStartRadius: 20,
    alignItems: 'center',
    elevation: 5,
    borderColor: '#C1DFFF',
    borderWidth: 1,
  },
  buttonClose: {
    backgroundColor: '#007FFF',
    borderRadius: 200,
    padding: 10,
    width: '90%',
    elevation: 2,
    marginBottom: 20
  },
  buttonOptions:{
    borderColor: '#C1DFFF',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 13,
    paddingVertical: 4.5,
    backgroundColor: '#ECF5FF',
    marginRight: 10,
    marginBottom: 10
  },
  textStyle: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20
  },
  modalText: {
    width: '100%',
    marginBottom: 30,
    textAlign: 'center',
    borderBottomColor: '#C1DFFF',
    borderBottomWidth: 1,
    paddingVertical: 20,
    fontSize: 18,
    fontWeight: "bold"
  },
  pressable: {
    flex: 1, 
    width:'100%',
    backgroundColor: 'transparent'
  }
})