//REACT
import { TouchableOpacity } from 'react-native'
import { useState } from 'react'
//REACT NAVIGATION
import { useNavigation } from '@react-navigation/native'
//COMPONENTS
import { Search } from '../Search';
//STYLES
import { HeaderContainer, Logo, LogoBold } from './styles';
//ICONS
import { Ionicons } from '@expo/vector-icons';
import { Bell, BellSlash } from 'phosphor-react-native'
import light from '../../theme/light';
import dark from '../../theme/dark';



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
    <HeaderContainer>
      <Logo onPress={handleNavigation}>
        Sou <LogoBold>Junior</LogoBold>
      </Logo>
      <Search />
      <TouchableOpacity onPress={handleClickNotifications} >
        {click === true ?  
          <Bell 
            size={24} 
            color={light.COLORS.PRIMARY_900}
            weight="duotone" 
          /> :
          <BellSlash 
            size={24} 
            color={light.COLORS.NOTIFICATION}
            weight="duotone" 
          /> 
        }
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons name="menu" size={30} color={light.COLORS.PRIMARY_900} />
      </TouchableOpacity>
    </HeaderContainer>
  );
}