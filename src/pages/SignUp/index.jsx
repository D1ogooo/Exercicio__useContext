import { useState } from 'react'
import { useAuth } from '../../hooks/useAuth'
import * as S from "../SignIn/style";
import LoginIcon from '../../assets/icon_loginpage.svg'

export function SignUp () {
 const [email, setEmail] = useState('')
 const [password, setPassword] = useState('')
 const [passwordConfirm, setPasswordConfirm] = useState('')
 const { users, Register } = useAuth()
     
 function handleSubmit (e) {
  e.preventDefault()

  if(password.length != passwordConfirm.length) {
   return alert('Senhas divergentes!!!')
  }

  let addNewUser = {
   email: email,
   password: password,
  }

  Register(addNewUser)
  console.log(users)
 }
 
  return (
   <>
     <S.ContainerPai>
      <S.Titulo>
        <img src={LoginIcon}/>
      </S.Titulo>
      <S.FormContainer>
        <S.Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Insira o seu email...' />
        <S.Input type='password' onChange={(e) => setPassword(e.target.value)} placeholder='Insira a sua senha... ' />
        <S.Input type='password' onChange={(e) => setPasswordConfirm(e.target.value)} placeholder='Confirme a sua senha... ' />
        <S.SubmitButton type='submit' onClick={handleSubmit} disabled={password.length > 10 || password.length === 0}>
          CADASTRAR
        </S.SubmitButton>
      </S.FormContainer>
      <S.LinkTo to="/">Ainda sem conta? Se registre!</S.LinkTo>
    </S.ContainerPai>
   </>
  )
}