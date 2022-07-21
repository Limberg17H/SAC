import React from 'react';
import ReactDOM from 'react-dom/client';

//import App from "./App"
import "materialize-css" 
import Aplicacion from './Aplicacion';
import reportWebVitals from './reportWebVitals';
//import "materialize-css/dist/css/materialize.min.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import {Auth0Provider} from '@auth0/auth0-react'

const root = ReactDOM.createRoot(document.getElementById('root'));
const domain = process.env.REACT_APP_AUTH0_DOMAIN;

root.render(
  <React.StrictMode>
    <Aplicacion />
  </React.StrictMode>

  
  
  
);

reportWebVitals()
