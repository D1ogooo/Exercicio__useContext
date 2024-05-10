import { useAuth } from "../hooks/useAuth";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

export function Routes(){
 const { isLogged } = useAuth()

 return (
  <>
   <BrowserRouter>
    {/* { isLogged() ? <AppRoutes/> : <AuthRoutes/> } */}
    <AppRoutes/>
    {/* <AuthRoutes/> */}
   </BrowserRouter>
  </>
 )
}