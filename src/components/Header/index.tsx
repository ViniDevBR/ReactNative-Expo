//REACT
import { TouchableOpacity } from 'react-native'
import { useState } from 'react'
//REACT NAVIGATION
import { useNavigation } from '@react-navigation/native'
//COMPONENTS
import { Search } from '../Search'
//STYLES
import { HeaderContainer, Logo, LogoBold } from './styles'
//ICONS
import { Ionicons } from '@expo/vector-icons'
import { Bell, BellSlash } from 'phosphor-react-native'
import { useTheme } from 'styled-components'
import { Menu } from '../Menu'

export function Header() {
  const [click, setClick] = useState<boolean>(false)
  const [menu, setMenu] = useState<boolean>(false)

  const { COLORS } = useTheme()
  const { navigate } = useNavigation()

  function handleClickNotifications() {
    setClick(!click)
  }
  function handleNavigation() {
    navigate('Home')
  }
  function handleMenu() {
    setMenu(!menu)
  }

  return (
    <HeaderContainer>
      <Logo onPress={handleNavigation}>
        Sou <LogoBold>Junior</LogoBold>
      </Logo>
      <Search />

      <TouchableOpacity onPress={handleClickNotifications}>
        {click === true ? (
          <Bell size={24} color={COLORS.PRIMARY_900} weight="duotone" />
        ) : (
          <BellSlash size={24} color={COLORS.NOTIFICATION} weight="duotone" />
        )}
      </TouchableOpacity>

      <TouchableOpacity onPress={handleMenu}>
        <Ionicons name="menu" size={30} color={COLORS.PRIMARY_900} />
      </TouchableOpacity>

      <Menu
        setState={setMenu}
        visible={menu}
        backButton={handleMenu}
        overlay={handleMenu}
      />
    </HeaderContainer>
  )
}
