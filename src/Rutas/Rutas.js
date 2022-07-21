import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Layout from '../Componentes/Layouts/Layout';
import Formulario from '../Paginas/Formulario';
import Usuario from"../Paginas/Usuario";
import Compras from '../Paginas/Compras';
import Home from '../Paginas/Home';

import Camisas from '../EXEP/Camisas';
import Shorts from '../EXEP/shorts';
import Calseta from '../EXEP/Calseta';
import Tenis from '../EXEP/Tenis';

import Registro from '../Paginas/Registro';
import RegistrarProducto from '../Paginas/registrarProducto';
import RegistroCalseta from '../Paginas/registroCalseta';
import RegistroCamisas from '../Paginas/registroCamisas';
import RegistroShorts from '../Paginas/registroShorts';
import RegistroTenis from '../Paginas/registroTenis';


//Clasificacion de camisas
import Camisa1 from '../EXEP/Camisas/Camisa1';
import Camisa2 from '../EXEP/Camisas/Camisa2';
import Camisa3 from '../EXEP/Camisas/Camisa3';

//Clasificacion de Shorts
import Short1 from '../EXEP/Shorts/Short1';

//Clasificacion de Calsetas
import Calseta1 from '../EXEP/Calsetas/Calseta1';

//Clasificacion de Tenis
import Tenis1 from '../EXEP/Tenis/Tenis1';



function Rutas() {
  return (
      <div>
         <Router>
             <Layout/>
                 <Routes>
                     <Route exact path="/Formulario" element = {<Formulario/>}/>
                     <Route exact path="/Usuario" element={<Usuario/>}/>
                     <Route path="/Compras" element={<Compras/>}/>
                     <Route path="/" element={<Home/>}/>
                     <Route path="/Camisas" element={<Camisas/>}/>
                     <Route path="/Shorts" element={<Shorts/>}/>
                     <Route path="/Calseta" element={<Calseta/>}/>
                     <Route path="/Tenis" element={<Tenis/>}/>
                     
                     <Route path="/Registro" element={<Registro/>}/>
                     <Route path="/RegistraPro" element={<RegistrarProducto/>}/>
                     <Route path="/registroCalseta" element={<RegistroCalseta/>}/>
                     <Route path="/registroCamisas" element={<RegistroCamisas/>}/>
                     <Route path="/registroShorts" element={<RegistroShorts/>}/>
                     <Route path="/registroTenis" element={<RegistroTenis/>}/>
                     

                     <Route path="/Camisa1" element={<Camisa1/>}/>
                     <Route path="/Camisa2" element={<Camisa2/>}/>
                     <Route path="/Camisa3" element={<Camisa3/>}/> 

                     <Route path="/Short1" element={<Short1/>}/> 

                     <Route path="/Calseta1" element={<Calseta1/>}/> 

                     <Route path="/Tenis1" element={<Tenis1/>}/> 

                     <Route path="/Compras" element={<Compras/>}/>
                                        
                     
                 </Routes>
             
         </Router>
      </div>
  )
}
 
export default Rutas