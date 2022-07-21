import React, { useEffect, useState } from "react";
import Axios from "../services/ConexionAxion";


function Compras() {
  const [producto, setProducto] = useState([]);

  const Consultar = async () => {
    const consulta = await Axios.get("/producto/consultar");
    setProducto(consulta.data);
    console.log(consulta.data);
  };

  useEffect(() => {
    Consultar();
  }, []);

  return (
    <>
      <div class="row container">
        {producto.map((producto, index) => {
          return (
            <div class="col-sm-3">
              <center>
                <div class="">
                  <img src={producto.idImg} class="img-fluid rounded-4" />
    
                </div>
              </center>              
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{producto.nombre}</h5>
              <div class="card-image">
            <img
              width="180px"
              class="responsive-img"
              
            />
            <span class="card-title black-text">{producto.descripcion}</span>
            
          </div>
              <p class="card-text text-justify">
                MXN $ {producto.precio}
              </p>
              <div>

              <a class="btn btn-primary" type="submit" value="Submit" href={producto.idLink}>
              Compralo ya!
              </a>
              
              
              </div>
            </div>
          </div>
        </div>
          );
        })}
      </div>
    </>
  );
}

export default Compras;