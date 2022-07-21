import React, { useState } from "react";

import Axios from "../services/ConexionAxion";

function RegistroShorts() {
  const variables = {
    _id:"",
    idImg:"",
    idLink:"",
    nombre: "",
    descripcion: "",
    precio: "",
  };

  const [valores, setValores] = useState(variables);

  const cambioEstado = (e) => {
    const { name, value } = e.target;
    setValores({ ...valores, [name]: value });
  };

  //Crear método para guardar información
  const Guardar = async () => {
    Axios.post("/shorts/guardar", {
      idImg:valores.idImg,
      idLink:valores.idLink,
      nombre:valores.nombre,
      descripcion:valores.descripcion,
      precio:valores.precio,
    }).then(() => {
        console.log("Guardo")
    });
    setValores(variables);
  };

  const Enviar = (e) => {
    e.preventDefault();

    if (valores._id === "") {
      Guardar();
    } else {
    }
  };

  return (
    <div className="container-fluid p-4">
      <div class="card">
        <div class="card-header">Ingresar Producto</div>
        <div class="card-body">
          <p class="card-text">
            <form onSubmit={Enviar}>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Coloca el enlace de tu imagen
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="idImg"
                  value={valores.idImg}
                  onChange={cambioEstado}
                  placeholder="https://drive.google.com/uc?export=download&id="
                />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="nombre"
                  value={valores.nombre}
                  onChange={cambioEstado}
                  placeholder="nombre de producto"
                />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Descripcion
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="descripcion"
                  value={valores.descripcion}
                  onChange={cambioEstado}
                  placeholder="Ingresa una descipcion"
                />
              </div>


              <div class="input-group mb-3">
                <span class="input-group-text">$</span>
                <input
                  type="text"
                  class="form-control"
                  name="precio"
                  value={valores.precio}
                  onChange={cambioEstado}
                  placeholder=""
                />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Coloca el enlace 
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="idLink"
                  value={valores.idLink}
                  onChange={cambioEstado}
                  placeholder="https://drive.google.com/uc?export=download&id="
                />
              </div>

              <button type="submit" className="btn btn-primary">
                {valores._id === "" ? "Enviar":"Actualizar"}
              </button>
            </form>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RegistroShorts;