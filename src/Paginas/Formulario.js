import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

function Formulario() {
  const variablesInicio = {
    correo: "",
    confrimar: "",
    contraseña: "",
  };

  const [values, setValues] = useState(variablesInicio);

  const CambioEstado = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const Enviar = (e) => {
    e.preventDefault();
    console.log(values);
  };

  useEffect(() => {}, []);

  return (
    <div>
      <h2>Inciar <span class="badge bg-info">Sesiòn</span></h2>
      <br/>
      <form>
      <div class="mb-3 row">
      <label for="staticEmail" class="col-sm-2 col-form-label">
      Email
      </label>
      <div class="col-sm-4">
      <input
      type="text"
      readonly
      class="form-control"
      id="Email"
      />
      </div>
      </div>
      <div class="mb-4 row">
      <label for="inputPassword" class="col-sm-2 col-form-label">
      Password
      </label>
      <div class="col-sm-4">
      <input type="password" class="form-control" id="inputPassword" />
      </div>
      </div>
      <Link to="/Usuario">
      <button type="button" class="btn btn-primary">Enviar</button>
      </Link>
      </form>
      <br/>
      <Link to="/Registro">
      <button type="button" class="btn btn-primary">Crear Cuenta</button>
      </Link>
    </div>
  );
}

export default Formulario;
