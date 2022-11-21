//REACT
import { View, Text } from 'react-native'
//COMPONENTS
import { Search } from '../Search';
//STYLES
import { styles } from './styles';
//ICONS
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Sou <Text style={styles.titleBold}>Junior</Text>
      </Text>

      <Search />
      
      <FontAwesome5 name="bell" size={24} color="#1165BA" />
      <Ionicons onPress={() => {}} name="menu" size={24} color="#1165BA" />
    </View>
  );
}