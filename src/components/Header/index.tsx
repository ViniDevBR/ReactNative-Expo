//REACT
import { View, Text, TouchableOpacity } from 'react-native'
import { useState } from 'react'
//REACT NAVIGATION
import { useNavigation } from '@react-navigation/native'
//COMPONENTS
import { Search } from '../Search';
//STYLES
import { styles } from './styles';
//ICONS
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { Bell, BellSlash } from 'phosphor-react-native'



export function Header() {
  const [click, setClick] = useState<boolean>(false)
  const { navigate } = useNavigation()

  function handleClickNotifications() {
    setClick(!click)
  }
  function handleNavigation() {
    navigate('Home')
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
      <Ionicons onPress={() => {}} name="menu" size={30} color="#1165BA" />
    </View>
  );
}