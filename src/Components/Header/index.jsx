import { useAuth } from "../../hooks/useAuth"
import { HeaderStyle, Container, Button } from "./style"
import LeftIcon from '../../assets/bxs-arrow-from-left.svg'

export const Header = () => {
  const { Loggout } = useAuth()

  function HandleLoggout () {
    Loggout()
  }

  return (
   <>
    <Container>
     <HeaderStyle>
      <ul>
       <li>
        <a href="#">Home</a>
       </li>
       <li>
        <Button onClick={HandleLoggout}>
         <img src={LeftIcon}/>
        </Button>
       </li>
      </ul>
     </HeaderStyle>
    </Container>
   </>
  )
}