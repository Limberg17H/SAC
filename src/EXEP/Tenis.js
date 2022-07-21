import React, { useEffect, useState } from "react";
import Axios from "../services/ConexionAxion";


function Tenis() {
  const [tenis, settenis] = useState([]);

  const Consultar = async () => {
    const consulta = await Axios.get("/tenis/consultar");
    settenis(consulta.data);
    console.log(consulta.data);
  };

  useEffect(() => {
    Consultar();
  }, []);

  return (
    <>
      <div class="row container">
        {tenis.map((tenis, index) => {
          return (
            <div class="col-sm-3">
              <center>
                <div class="">
                  <img src={tenis.idImg} class="img-fluid rounded-4" />
    
                </div>
              </center>              
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{tenis.nombre}</h5>
              <div class="card-image">
            <img
              width="180px"
              class="responsive-img"
              
            />
            <span class="card-title black-text">{tenis.descripcion}</span>
            
          </div>
              <p class="card-text text-justify">
                MXN $ {tenis.precio}
              </p>
              <div>

              <a class="btn btn-primary" type="submit" value="Submit" href={tenis.idLink}>
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

export default Tenis;
