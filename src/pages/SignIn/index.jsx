import { useState } from 'react'
import { useAuth } from '../../hooks/useAuth'
import { Container, ButtonSubmit } from './style'
import { Link, useNavigate } from 'react-router-dom'

export function SignIn() {
 const [email, setEmail] = useState('')
 const [password, setPassword] = useState('')
 const { Login } = useAuth()
 const navigate = useNavigate()
  
 async function handleSubmit (e) {
  e.preventDefault()

  let loginSession = {
   email: email,
   password: password,
  }

  await Login(loginSession)
  navigate('/');
}

 return (
  <>
   <Container>
   <form>
    <h1>Faça login</h1>
    <input type="email" name="email" id="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
    <input type="password" name="password" id="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
    <ButtonSubmit type="submit" onClick={handleSubmit}>Submit</ButtonSubmit>
    <p style={{ marginTop: '10px' }}>não possui uma conta?<Link to='/register'>Crie uma agora mesmo</Link></p>
   </form>
   </Container>
  </>
 )
}