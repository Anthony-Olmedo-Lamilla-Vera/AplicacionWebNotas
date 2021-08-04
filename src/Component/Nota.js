import React, { useEffect, useState } from "react";
import Buttoneliminar from "./Buttoneliminar";
function Nota(props) {
  return (
    <div className="Notas">
      <div className="contenido">
        <p className="titlenote">{props.titulo} </p>
        <p className="descrip-note">{props.description}</p>
        <div className="eliminar-btn">
          <Buttoneliminar id={props.id} />
          <p>{props.fecha} </p>
        </div>
      </div>
    </div>
  );
}

export default Nota;
