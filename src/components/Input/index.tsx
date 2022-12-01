import { View, TextInput } from 'react-native'

interface IInput {
  placeholder: string
}

export function Input(props: IInput) {
  return (
    <View>
      <TextInput placeholder={props.placeholder} />
    </View>
  )
}