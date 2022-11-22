import { SetStateAction } from "react";
import { ScrollView, View } from "react-native";
import { Buttons } from "../Button";
import { styles } from "./styles";

interface Props {
  openData: VoidFunction
  openType: VoidFunction
  openEXP: VoidFunction
}


export function Select(props: Props) {
  return(
    <ScrollView horizontal contentContainerStyle={styles.scrollview}>
      <View style={styles.container}>
        <Buttons onPress={props.openData} title="Data" />
        <Buttons onPress={props.openType} title="Tipo" />
        <Buttons onPress={props.openEXP} title="Nivel de experiencia" />
      </View>
    </ScrollView>
  )
}