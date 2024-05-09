import { useState } from 'react'
import { useAuth } from '../../hooks/useAuth'
import * as S from "./style";
import LoginIcon from '../../assets/icon_loginpage.svg'

export function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { Login } = useAuth()

  async function HandleSubmit(e) {
    e.preventDefault()

    let loginSession = {
      email: email,
      password: password,
    }

    await Login(loginSession)
  }


  return (
    <S.ContainerPai>
      <S.Titulo>
        <img src={LoginIcon}/>
      </S.Titulo>
      <S.FormContainer>
        <S.Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Insira o seu email...' />
        <S.Input value={password} type='password' onChange={(e) => setPassword(e.target.value)} placeholder='Insira a sua senha... ' />
        <S.SubmitButton type='submit' onClick={HandleSubmit} disabled={password.length > 10 || password.length === 0}>
          ENTRAR
        </S.SubmitButton>
      </S.FormContainer>
      <S.LinkTo to="/register">Ainda sem conta? Se registre!</S.LinkTo>
    </S.ContainerPai>
  )
}
