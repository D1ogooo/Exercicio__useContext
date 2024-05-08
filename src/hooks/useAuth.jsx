import { useState, useEffect, createContext, useContext } from "react";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  let [users, setUsers] = useState([{
   email: 'diiogomarsalcosta@gmail.com',
   password: 88490495,
  }]);
  let [token, setToken] = useState(null);

  useEffect(() => {
    const storageToken = localStorage.getItem('@token');
    const storageUsers = localStorage.getItem('@users');
    
    if (storageToken) {
      setToken(storageToken);
    }
  
    if (storageUsers) {
      setUser(prevUsers => [...prevUsers, JSON.parse(storageUsers)]);
    }
  }, []);

  function Register(newUser) {
   setUsers(prevUsers => [...prevUsers, newUser]);
   localStorage.setItem('@users', JSON.stringify([...users, newUser]));
  }

  function Login(loginSession) {
    // Verifica se há usuários no estado 'users'
    if (users.length > 0) {
      // Encontra o usuário com o email e senha correspondentes
      const verifyUser = users.find(user => user.email === loginSession.email && user.password === loginSession.password);

      if (verifyUser) {
        // Se o usuário for encontrado, armazene o email no localStorage
        localStorage.setItem('@users', loginSession.email);
        console.log('Usuário encontrado com sucesso.');
        // Redireciona para a próxima página
      } else {
        console.log('Usuário não encontrado');
      }
    } else {
      console.log('Nenhum usuário registrado');
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