//REACT
import { Platform } from 'react-native';
//REACT MAVIGATION
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
//PHOSPHOR ICONS
import { PlusCircle, House, MapPin, User, Suitcase } from 'phosphor-react-native'
//SCREENS
import { Home } from '../screens/Home';
import { Location } from '../screens/Location';
import { Add } from '../screens/Add';
import { UserInfo } from '../screens/User';
import { Vagas } from '../screens/Vagas';


const { Screen, Navigator} = createBottomTabNavigator()

export function AppRoutes() {

  return (
    <Navigator screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: '#1165BA',
      tabBarInactiveTintColor: '#898989',
      tabBarHideOnKeyboard: true,
      tabBarLabelPosition: 'below-icon',
      tabBarStyle: {
        backgroundColor: "#fff",
        position: 'absolute',
        borderTopWidth: 0,
        height: 60,
      },
      tabBarItemStyle: {
        position: 'relative',
        top: Platform.OS === 'android' ? 0 : -10,
      },
      tabBarLabelStyle: {
        fontSize: 15
      }
    }}>
      <Screen 
        name="Home" 
        component={Home} 
        options={{
          tabBarIcon: ({ color }) => <House color={color} size={32} />,
          tabBarLabel: 'Inicio',
        }} 
      />
      <Screen 
        name="Location" 
        component={Location} 
        options={{
          tabBarIcon: ({ color }) => <MapPin color={color} size={32} />,
          tabBarLabel: 'Local'
        }} 
      />
      <Screen 
        name="Add" 
        component={Add} 
        options={{
          tabBarIcon: ({ color }) => <PlusCircle color={color} size={32} />,
          tabBarLabel: 'Adicionar'
        }} 
      />
      <Screen 
        name="User" 
        component={UserInfo} 
        options={{
          tabBarIcon: ({ color }) => <User color={color} size={32} />,
          tabBarLabel: 'Perfil'
        }} 
      />
      <Screen 
        name="Vagas" 
        component={Vagas} 
        options={{
          tabBarIcon: ({ color }) => <Suitcase color={color} size={32} />,
          tabBarLabel: 'Vagas'
        }} 
      />
    </Navigator>
  );
}