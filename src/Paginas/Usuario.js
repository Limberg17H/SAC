import React from "react";

function Usuario() {
  return (
    <div class="row">
      <div class="card">
        <div class="card-header">Datos de Usuario</div>
        <div class="card-body">
          <div class="row">
            <div class="col s12">
              <div class="card  indigo accent darken-1">
                <div class="card-content white-text">
                  <span class="Usuario">Usuario</span>
                  <p></p>
                </div>
                <div class="card-action white-text">
                  <p>Nombre:</p>
                  <p>Apellidos:</p>
                  <p>Imagen(iconts)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col s12 m4">
          <div class="row">
            <div class="col s12">
              <div class="card  indigo accent darken-1">
                <div class="card-content black--text">
                  <span class="">Compras</span>
                  <p></p>
                </div>
                <div class="card-action white-text">
                  <a href="#">Historial</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Usuario;
