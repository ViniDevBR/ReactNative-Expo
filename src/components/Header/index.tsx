//REACT
import { TouchableOpacity } from 'react-native'
//REACT NAVIGATION
import { useNavigation } from '@react-navigation/native'
//COMPONENTS
import { Search } from '../Search'
import { Menu } from '../Menu'
//STYLES && ICONS && HOOKS
import { HeaderContainer, Logo, LogoBold } from './styles'
import { Ionicons } from '@expo/vector-icons'
import { Bell, BellSlash } from 'phosphor-react-native'
import { useTheme } from 'styled-components'
import { useHeader } from '../../hooks/useHeader'



export function Header() {
  const { isMenuOpen, setIsMenuOpen, notification, setNotification } = useHeader()
  const { COLORS } = useTheme()
  const { navigate } = useNavigation()

  function handleClickNotifications() {
    setNotification(!notification)
  }
  function handleNavigation() {
    navigate('Home')
  }
  function handleMenu() {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <HeaderContainer>
      <Logo onPress={handleNavigation}>
        Sou <LogoBold>Junior</LogoBold>
      </Logo>
      <Search />

      <TouchableOpacity onPress={handleClickNotifications}>
        {notification === true ? (
          <Bell size={24} color={COLORS.PRIMARY_900} weight="duotone" />
        ) : (
          <BellSlash size={24} color={COLORS.NOTIFICATION} weight="duotone" />
        )}
      </TouchableOpacity>

      <TouchableOpacity onPress={handleMenu}>
        <Ionicons name="menu" size={30} color={COLORS.PRIMARY_900} />
      </TouchableOpacity>

      <Menu
        visible={isMenuOpen}
        backButton={handleMenu}
        overlay={handleMenu}
      />
    </HeaderContainer>
  )
}
