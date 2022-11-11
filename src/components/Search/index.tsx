import { View, Text, TextInput } from 'react-native'
import { styles } from './styles';
import { FontAwesome } from '@expo/vector-icons'; 

export function Search() {
  return (
    <View style={styles.container}>
      <TextInput placeholder='O quê cargo, área...'></TextInput>
      <FontAwesome name="search" size={24} color="#9A9DA1" />
    </View>
  );
}