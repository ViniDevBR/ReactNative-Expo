//REACT
import { View, TextInput } from 'react-native'
//STYLES AND ICON
import { styles } from './styles';
import { Ionicons } from '@expo/vector-icons'; 

export function Search() {
  return (
    <View style={styles.container}>
      <TextInput placeholder='O quê, cargo, área...'></TextInput>
      <Ionicons name="search-outline" size={24} color="#9A9DA1" />
    </View>
  );
}