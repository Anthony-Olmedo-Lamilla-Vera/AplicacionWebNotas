import React, { useContext, useEffect, useState } from "react";
import { Contexto } from "../Context";
import Buttoneliminar from "./Buttoneliminar";
function Nota(props) {
  const { Conf, Eliminar } = useContext(Contexto);

  useEffect(() => {}, [Eliminar, Conf]);
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
