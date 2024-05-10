import { Header } from "../../Components/Header";
import { Container } from "../SignIn/style";
import { Title, PrincipalContent, Image } from './style'
import principalImage from '../../assets/imagem principal da mao com pc.svg'

export function HomeDashboard() {
  return (
   <>
    <Header />
    <Container>
     <PrincipalContent>
     <Image>
      <img src={principalImage}/>
     </Image>
     <hr />
     <Title>Bem vindo ao dashboard</Title>   
     </PrincipalContent>
    </Container>
   </>
  )
}
