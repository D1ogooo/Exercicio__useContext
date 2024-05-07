import { useState } from 'react'
import { useAuth } from './hooks/useAuth'

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { user, AddUser } = useAuth()

  const handleSubmit = (e) => {
    e.preventDefault()
    let newUser = {
      email: email,
      password: password
    }

    AddUser(newUser)
    console.log(user)
  }



  return (
    <>
      <form>
        Faça login
        <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
    </>
  )
}

export default App
