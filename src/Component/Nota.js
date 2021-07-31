import React, { useEffect, useState } from "react";

function Nota(props) {
  return (
    <div className="Notas">
      <div className="contenido">
        <p className="titlenote">{props.titulo} </p>
        <p className="descrip-note">{props.description}</p>
      </div>
    </div>
  );
}

export default Nota;
