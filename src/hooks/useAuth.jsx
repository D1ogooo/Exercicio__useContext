import { useState, useEffect, createContext, useContext } from "react";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  let [users, setUsers] = useState([]);
  let [token, setToken] = useState(null);
  useEffect(() => {
    const storageToken = localStorage.getItem('@token');
    const storageUsers = localStorage.getItem('@users');
    
    if (storageToken) {
     setToken(storageToken);
    }
  
    if (storageUsers) {
     setUsers(JSON.stringify(storageUsers));
    }
  }, []);

  function Register(newUser) {
    setUsers(prevUsers => [...prevUsers, newUser]);
  }

  function Login(loginSession) {
    if(!Array.isArray(users)) {
      return console.log('Usuário não encontrado')
    }
  
    const verifyUser = users.find((user) => user.email === loginSession.email && user.password === loginSession.password);
    if (verifyUser) {
     const userEmail = loginSession.email
     let generateToken = {
      code: '1234j01234h1fh1fh13bo'
     };
     localStorage.setItem('@users', JSON.stringify(userEmail));
     setToken(generateToken.code);
     localStorage.setItem('@token', generateToken.code);
    } else {
      console.log('Usuário não encontrado');
    } 
  }

  function isLogged() {
   let storageToken = localStorage.getItem('@token');

   return storageToken;
  }

  function Loggout() {
   localStorage.removeItem('@users');
   localStorage.removeItem('@token');
  }

  return (
   <AuthContext.Provider value={{ Register, Login, users, Loggout, isLogged }}>
    {children}
   </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  return context
}

export { AuthProvider, useAuth }