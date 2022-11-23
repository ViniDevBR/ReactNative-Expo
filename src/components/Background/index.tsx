//STYLE
import { BgContainer } from './styles';
//OUTROS
import backgroundImg from '../../assets/background.png'
interface Props{
  children: React.ReactNode;
}

export function Background({ children }: Props){
  return (
    <BgContainer 
      source = { backgroundImg }
      defaultSource = { backgroundImg }
    >
      {children}
    </BgContainer>
  )
}