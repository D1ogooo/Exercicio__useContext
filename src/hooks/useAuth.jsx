import { createContext, useContext, useState } from "react";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState([]);
 
  function AddUser(newUser) {
   setUser([...user, newUser])
  }

  return (
   <AuthContext.Provider value={{ AddUser, setUser, user }}>
    {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

export { AuthProvider, useAuth };