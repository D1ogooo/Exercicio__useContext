import { useState, useEffect, createContext, useContext } from "react";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  let [user, setUser] = useState([]);
  let [token, setToken] = useState(null);

  useEffect(() => {
    let storageToken = localStorage.getItem('@token');
    if (storageToken) {
     setToken(storageToken);
    }

    let storageUsers = localStorage.getItem('@users');

    try {
     if (storageUsers) {
      setUser([...user, JSON.parse(storageUsers)]);
     }
    } catch (error) { 
      console.error("Error parsing JSON from localStorage:", error);
    }
  }, []);

  function Register(newUser) {
    setUser([...user, newUser]);
  }

  function Login() {
    let generateToken = {
      code: '1234j01234h1fh1fh13bo'
    };
    setToken(generateToken.code);
    localStorage.setItem('@token', generateToken.code);
  }

  function isLogged() {
    let storageToken = localStorage.getItem('@token');
    return storageToken;
  }

  function Loggout() {
    setToken(null);
    localStorage.removeItem('@token');
  }

  return (
   <AuthContext.Provider value={{ Register, Login, user, Loggout, isLogged }}>
    {children}
   </AuthContext.Provider>
  );
}

function useAuth() {
 const context = useContext(AuthContext);
 return context;
}

export { AuthProvider, useAuth }