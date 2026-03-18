import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";

import Cabecalho from "./componentes/Cabecalho/Cabecalho";
import Rodape from "./componentes/Rodape/Rodape";
import PaginaInicial from "./paginas/PaginaInicial/PaginaInicial";

const roteador = createBrowserRouter([
 {
   path: '',
   element: <PaginaInicial/>
 },
 {
  path: '*',
  element: <h3>Página não encontrada</h3>
 },
]);

function App() {
  return (
    <>
      <Cabecalho />
      <RouterProvider router={roteador} />
      <Rodape /> 
    </>
  );
}

export default App;
