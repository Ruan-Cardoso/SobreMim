import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./paginas/Inicio";
import SobreMIm from "./paginas/SobreMim"
import Menu from "./componentes/Menu";
import Rodape from "componentes/Rodape";
import PaginaPadrao from "componentes/PaginaPadrao";
import Post from "paginas/Post";
import Nencontrado from "paginas/SobreMim/NaoEncontrado";
import ScrollToTop from "componentes/ScrollToTop";
//import './App.css';

function AppRoutes() {
  return (
    <BrowserRouter>
   <ScrollToTop/>
   <Menu />
       
     <Routes>
      <Route path="/" element={<PaginaPadrao/>}> {/*paginapadrao e usado para evitar repeticao do main automatizando rotas aninhadas*/}
        <Route index element={<Inicio />} />
        <Route path="sobremim" element={<SobreMIm />} />
      </Route> 
        <Route path="posts/:id" element={<Post/>} />
        <Route path="*" element={<Nencontrado/>} />
     </Routes>
     <Rodape/>
    </BrowserRouter>
  )
}
export default AppRoutes;
