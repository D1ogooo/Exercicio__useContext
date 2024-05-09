import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStyle } from './style/GlobalStyle.js'
import { Routes } from './routes/index.jsx'
import { AuthProvider } from './hooks/useAuth.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
 <AuthProvider>
  <Routes/>
  <GlobalStyle/>
 </AuthProvider>
</React.StrictMode>,
)
