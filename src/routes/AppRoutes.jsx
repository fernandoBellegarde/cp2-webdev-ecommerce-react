import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout"
import Home from "../pages/Home"
import Carrinho from "../pages/Carrinho"
import Perfil from "../pages/Perfil"
import PageNotFound from "../pages/PageNotFound";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <PageNotFound />, 
    children: [
      {        
        index: true, 
        element: <Home />,     
      },
      {
        path: "perfil",
        element: <Perfil />,
      },
      {
        path: "carrinho",
        element: <Carrinho />,
      }
    ],
  },
]);
