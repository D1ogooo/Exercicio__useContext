import { useAuth } from "../../hooks/useAuth";
import { HeaderStyle, Container, Button, A } from "./style";
import LeftIcon from '../../assets/bxs-arrow-from-left.svg';

export const Header = () => {
  const { Loggout } = useAuth();

  function HandleLoggout () {
    Loggout();
  }

  return (
    <HeaderStyle>
      <Container>
        <ul>
          <li>
            <A to='/'>Home</A>
          </li>
          <li>
            <Button onClick={HandleLoggout}>
              <img src={LeftIcon} alt="Logout"/>
            </Button>
          </li>
        </ul>
      </Container>
    </HeaderStyle>
  );
};
