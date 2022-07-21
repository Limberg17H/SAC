import React, { useEffect, useState } from "react";
import Axios from "../services/ConexionAxion";


function Camisa() {
  const [camisa, setcamisa] = useState([]);

  const Consultar = async () => {
    const consulta = await Axios.get("/camisa/consultar");
    setcamisa(consulta.data);
    console.log(consulta.data);
  };

  useEffect(() => {
    Consultar();
  }, []);

  return (
    <>
      <div class="row container">
        {camisa.map((camisa, index) => {
          return (
            <div class="col-sm-3">
              <center>
                <div class="">
                  <img src={camisa.idImg} class="img-fluid rounded-4" />
    
                </div>
              </center>              
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{camisa.nombre}</h5>
              <div class="card-image">
            <img
              width="180px"
              class="responsive-img"
              
            />
            <span class="card-title black-text">{camisa.descripcion}</span>
            
          </div>
              <p class="card-text text-justify">
                MXN $ {camisa.precio}
              </p>
              <div>

              <a class="btn btn-primary" type="submit" value="Submit" href={camisa.idLink}>
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

export default Camisa;
