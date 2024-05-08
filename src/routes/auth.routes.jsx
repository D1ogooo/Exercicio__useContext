import { Route, Routes } from 'react-router-dom'
import { SignIn }  from '../pages/SignIn/index'
import { SignUp }  from '../pages/SignUp/index'

export function AuthRoutes() {
 return (
  <Routes>
   <Route path='/' element={<SignIn/>}/>
   <Route path='/register' element={<SignUp/>}/>
  </Routes>
 )
}