import React, { useEffect, useState } from "react";
import Axios from "../services/ConexionAxion";


function Shorts() {
  const [shorts, setshorts] = useState([]);

  const Consultar = async () => {
    const consulta = await Axios.get("/shorts/consultar");
    setshorts(consulta.data);
    console.log(consulta.data);
  };

  useEffect(() => {
    Consultar();
  }, []);

  return (
    <>
      <div class="row container">
        {shorts.map((shorts, index) => {
          return (
            <div class="col-sm-3">
              <center>
                <div class="">
                  <img src={shorts.idImg} class="img-fluid rounded-4" />
    
                </div>
              </center>              
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{shorts.nombre}</h5>
              <div class="card-image">
            <img
              width="180px"
              class="responsive-img"
              
            />
            <span class="card-title black-text">{shorts.descripcion}</span>
            
          </div>
              <p class="card-text text-justify">
                MXN $ {shorts.precio}
              </p>
              <div>

              <a class="btn btn-primary" type="submit" value="Submit" href={shorts.idLink}>
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

export default Shorts;