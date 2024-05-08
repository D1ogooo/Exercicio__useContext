import { useState } from 'react'
import { useAuth } from '../../hooks/useAuth'
import { Container } from './style'

export function SignUp () {
 const [email, setEmail] = useState('')
 const [password, setPassword] = useState('')
 const [passwordConfirm, setPasswordConfirm] = useState('')

 const { user, Register } = useAuth()
     
 function handleSubmit (e) {
  e.preventDefault()

  if(password.length != passwordConfirm.length) {
   return alert('Senhas divergentes!!!')
  }

  let addNewUser = {
   email: email,
   passowrd: password,
   passwordConfirm: passwordConfirm, 
  }

  Register(addNewUser)
  console.log(user)
 }
  return (
   <>
   <Container>
    <form>
     <h1>Registre-se</h1>
     <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}/>
     <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)}/>
     <input type="password" name="passwordConfirm" id="passwordConfirm" onChange={(e) => setPasswordConfirm(e.target.value)}/>
     <input type="Submit" onClick={handleSubmit}/>
    </form>
   </Container>
   </>
  )
}