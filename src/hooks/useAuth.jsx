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
      // console.log(storageUsers)
      setUsers(JSON.stringify(storageUsers));
    }
  }, []);

  function Register(newUser) {
    setUsers(prevUsers => [...prevUsers, newUser]);
  }

  function Login(loginSession) {
    const verifyUser = users.find(user => user.email === loginSession.email && user.password === loginSession.password);
    if (verifyUser) {
      let abc = loginSession.email
      localStorage.setItem('@users', JSON.stringify(abc));
      console.log('Usuário encontrado com sucesso.');
      // localStorage.setItem('@users', JSON.stringify([...users, newUser]));
    } else {
      console.log('Usuário não encontrado');
    }
  }

  function isLogged() {
   let storageToken = localStorage.getItem('@token');
   return storageToken;
  }

  function Loggout() {
   setToken(null);
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
 return context;
}

export { AuthProvider, useAuth }