import { Route, Routes } from 'react-router-dom'
import { Dashboard }  from '../pages/Dashboard/index.jsx'
import { Pagina_404 } from '../pages/Pagina_404/index.jsx'

export function AppRoutes() {
 return (
  <Routes>
   <Route path='/' element={<Dashboard/>}/>
   <Route path='*' element={<Pagina_404/>}/>
  </Routes>
 )
}

