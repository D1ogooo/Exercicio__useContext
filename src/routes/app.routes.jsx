import { Route, Routes } from 'react-router-dom'
import { HomeDashboard }  from '../pages/Dashboard/index.jsx'
import { DashboardIsues } from '../pages/Dashboard/DashboardIsues/index.jsx'
import { Pagina_404 } from '../pages/Pagina_404/index.jsx'

export function AppRoutes() {
 return (
  <Routes>
   <Route path='/' element={<HomeDashboard/>}/>
   <Route path='/gerenc' element={<DashboardIsues/>}/>
   <Route path='*' element={<Pagina_404/>}/>
  </Routes>
 )
}

