import React from 'react'
import { AuthProvider } from './hooks/useAuth.jsx'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>
  <AuthProvider>
   <App />
  </AuthProvider>
 </React.StrictMode>,
)
