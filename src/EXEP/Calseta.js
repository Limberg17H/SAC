import React, { useEffect, useState } from "react";
import Axios from "../services/ConexionAxion";


function Calseta() {
  const [calseta, setcalseta] = useState([]);

  const Consultar = async () => {
    const consulta = await Axios.get("/calseta/consultar");
    setcalseta(consulta.data);
    console.log(consulta.data);
  };

  useEffect(() => {
    Consultar();
  }, []);

  return (
    <>
      <div class="row container">
        {calseta.map((calseta, index) => {
          return (
            <div class="col-sm-3">
              <center>
                <div class="">
                  <img src={calseta.idImg} class="img-fluid rounded-4" />
    
                </div>
              </center>              
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{calseta.nombre}</h5>
              <div class="card-image">
            <img
              width="180px"
              class="responsive-img"
              
            />
            <span class="card-title black-text">{calseta.descripcion}</span>
            
          </div>
              <p class="card-text text-justify">
                MXN $ {calseta.precio}
              </p>
              <div>

              <a class="btn btn-primary" type="submit" value="Submit" href={calseta.idLink}>
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

export default Calseta;