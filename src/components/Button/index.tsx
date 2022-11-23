//REACT
import { ReactNode } from "react";
import { TouchableOpacityProps } from "react-native";
//STYLES
import { ButtonContainer, Title } from "./styles";


interface Props extends TouchableOpacityProps {
  title: string
  icon?: ReactNode
  type?: 'close' | 'selected' | undefined
}

export function Buttons({title, ...props}: Props) {
  return(
    <ButtonContainer types={props.type} {...props}>
      <Title types={props.type} style={{marginRight: props.icon ? 10 : 0}}>
        {title}
      </Title>

      { props.icon }
    </ButtonContainer>
  )
}