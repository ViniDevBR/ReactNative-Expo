//REACT
import { Platform } from 'react-native';
//REACT MAVIGATION
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
//PHOSPHOR ICONS
import { PlusCircle, House, MapPin, User, Suitcase } from 'phosphor-react-native'
import { Home } from '../screens/Home';


const { Screen, Navigator} = createBottomTabNavigator()

export function AppRoutes() {

  return (
    <Navigator screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: '#1165BA',
      tabBarInactiveTintColor: '#fff',
      tabBarStyle: {
        backgroundColor: "#fff",
        position: 'absolute',
        borderTopWidth: 0,
        height: 60
      },
      tabBarItemStyle: {
        position: 'relative',
        top: Platform.OS === 'android' ? 0 : -10
      }
    }}>
      <Screen 
        name="Home" 
        component={Home} 
        options={{
          tabBarIcon: ({ color }) => <House color={color} size={10} />,
          tabBarLabel: 'Inicio'
        }} 
      />
      <Screen 
        name="Location" 
        component={Home} 
        options={{
          tabBarIcon: ({ color }) => <MapPin color={color} size={10} />,
          tabBarLabel: 'Local'
        }} 
      />
      <Screen 
        name="Add" 
        component={Home} 
        options={{
          tabBarIcon: ({ color }) => <PlusCircle color={color} size={10} />,
          tabBarLabel: 'Adicionar'
        }} 
      />
      <Screen 
        name="User" 
        component={Home} 
        options={{
          tabBarIcon: ({ color }) => <User color={color} size={10} />,
          tabBarLabel: 'Perfil'
        }} 
      />
      <Screen 
        name="Vagas" 
        component={Home} 
        options={{
          tabBarIcon: ({ color }) => <Suitcase color={color} size={10} />,
          tabBarLabel: 'Vagas'
        }} 
      />
    </Navigator>
  );
}