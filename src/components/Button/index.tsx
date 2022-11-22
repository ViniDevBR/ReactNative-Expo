import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";
import { styles } from "./styles";
import {CaretCircleDown} from 'phosphor-react-native'



interface Props extends TouchableOpacityProps {
  title: string
  icon?: boolean
}

export function Buttons({title, icon = true, ...props}: Props) {
  return(
    <TouchableOpacity {...props} style={styles.container}>
      <Text style={styles.text}>
        {title}
      </Text>
      {icon === true ?
        <CaretCircleDown size={15} color="#1165BA" weight="bold" />
        :
        null
      }
    </TouchableOpacity>
  )
}