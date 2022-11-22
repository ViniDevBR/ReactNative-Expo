//REACT
import { View, Text, TouchableOpacity, ProgressViewIOSComponent } from 'react-native'
import { useState, useRef } from 'react'
//REACT NAVIGATION
import { useNavigation } from '@react-navigation/native'
//COMPONENTS
import { Search } from '../Search';
//STYLES
import { styles } from './styles';
//ICONS
import { Ionicons } from '@expo/vector-icons';
import { Bell, BellSlash } from 'phosphor-react-native'
//MODALIZE
import { Modalize } from 'react-native-modalize'
import { Portal } from 'react-native-portalize';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


export function Header() {
  const [click, setClick] = useState<boolean>(false)

  const { navigate } = useNavigation()
  const modalizeRef = useRef<Modalize>(null);


  function handleClickNotifications() {
    setClick(!click)
  }
  function handleNavigation() {
    navigate('Home')
  }
  function onOpen() {
    modalizeRef.current?.open()
  }

  return (
      <View style={styles.container}>
        <Text onPress={handleNavigation} style={styles.title}>
          Sou <Text style={styles.titleBold}>Junior</Text>
        </Text>

        <Search />
        <TouchableOpacity onPress={handleClickNotifications} >
          {click === true ?  
            <Bell 
              size={24} 
              color='#1165BA'
              weight="duotone" 
            /> :
            <BellSlash 
              size={24} 
              color='#f00'
              weight="duotone" 
            /> 
          }
        </TouchableOpacity>
        
      
        {/* <MaterialCommunityIcons 
          onPress={handleClickNotifications} 
          name={click === true ? "bell-cancel-outline" : "bell-outline"} 
          size={24} 
          color={click === true ?  "#f00": "#1165BA"} 
        /> */}
        <TouchableOpacity onPress={onOpen}>
          <Ionicons name="menu" size={30} color="#1165BA" />
        </TouchableOpacity>

        
      </View>
  
  );
}