//REACT
import { View, ActivityIndicator } from 'react-native';

//STYLES
import { styles } from './styles';


export function Loading(){
  return (
    <View style={styles.container}>
      <ActivityIndicator color='#000'/>
    </View>
  )
}