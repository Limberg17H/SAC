import React from "react";

import { Link } from "react-router-dom";


import "material-icons";

function Menu() {

  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-primary">
            
      <ul class="nav nav-tabs justify-content-end" >
      
      <Link to ="/" class="navbar-brand content link-dark" href="#">
      <i class="bi bi-cart"></i>
      <img src="./pngegg.png" alt="" width="30" height="24" class="d-inline-block align-text-top"/>
      SAC
      </Link>
    
    <li class="nav-item ">
          
        <Link to="/" class="nav-link link-dark" aria-current="page" href="#">
        Home
        </Link>
    </li>
    <li class="nav-item dropdown">
        <a
        class="nav-link dropdown-toggle link-dark"
        data-bs-toggle="dropdown"
        href="#"
        role="button"
        aria-expanded="false"
        >
        Categoria
        </a>
      <ul class="dropdown-menu">
    <li>

      <Link class="dropdown-item" to="Calseta">
      Calseta
      </Link>
    </li>
            
    <li>
       <Link class="dropdown-item" to="Camisas">
       Camisas
       </Link>
    </li>

    <li>
        <Link class="dropdown-item" to="shorts">
        Shorts
        </Link>
    </li>

    <li>
         <hr class="dropdown-divider" />
    </li>
            
    <li>
         <Link class="dropdown-item " to="Tenis">
         Tenis
         </Link>
    </li>
        
        </ul>
        </li>
        
        <li class="nav-item ">
          <Link class="nav-link link-dark" to="/Formulario">
          Registrarse
          </Link>
        </li>

        <li class="nav-item">
          <Link class="nav-link link-dark" to="/Compras">Compra</Link>
        </li>

        <li class="nav-item">
          <Link class="nav-link link-dark" to="/Usuario">Usuario</Link>
        </li>

        <li class="nav-item">
          <Link class="nav-link link-dark" to="/RegistraPro">Registrar Producto</Link>
        </li>

        <li class="nav-item">
          <Link class="nav-link link-dark" to="/registroCalseta">Registrar Calsetas</Link>
        </li>

        <li class="nav-item">
          <Link class="nav-link link-dark" to="/registroCamisas">Registrar Camisa</Link>
        </li>

        <li class="nav-item">
          <Link class="nav-link link-dark" to="/registroShorts">Registrar shorts</Link>
        </li>

        <li class="nav-item">
          <Link class="nav-link link-dark" to="/registroTenis">Registrar Tenis</Link>
        </li>

        </ul>
      </nav>
    </div>
  );
}

export default Menu;
