import { Header } from "../../../Components/Header";
import { Container } from "../../SignIn/style";
import { Title } from "../style";
import { Content, Card } from './style.js'

export function DashboardIsues() {
  return (
   <>
    <Header />
    <Container>
     <Title style={{
      marginTop: '1.5rem'
     }}>Bem vindo <span style={{
      backgroundColor: '#0000005e', marginLeft: '8px', padding: '3px', borderRadius: '10px'
     }}>admin</span></Title>
     <Content>
      <Card>
        <Title>
          Dados do usuario
        </Title>
        <hr />
       <p>
        email: diiogomarsalcosta@gmail.com
       </p>
      </Card>
      <Card>
        <Title>
          Dados do usuario
        </Title>
        <hr />
       <p>
        email: diiogomarsalcosta@gmail.com
       </p>
      </Card>
     </Content>
    </Container>
   </>
  )
}