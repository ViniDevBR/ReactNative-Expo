//STYLE
import { styles } from './styles';

//OUTROS
import { ImageBackground } from 'react-native';
import backgroundImg from '../../assets/background.png'

interface Props{
  children: React.ReactNode;
}

export function Background({ children }: Props){
  return (
    <ImageBackground 
    source = { backgroundImg }
    defaultSource = { backgroundImg }
    style = { styles.container }
    >
      {children}
    </ImageBackground>
  )
}