import { Route, Routes } from 'react-router-dom'
import { SignIn }  from '../pages/SignIn/index'
import { SignUp }  from '../pages/SignUp/index'
import { Pagina_404 } from '../pages/Pagina_404'

export function AuthRoutes() {
 return (
  <Routes>
   <Route path='/' element={<SignIn/>}/>
   <Route path='/register' element={<SignUp/>}/>
   <Route path='*' element={<Pagina_404/>}/>
  </Routes>
 )
}