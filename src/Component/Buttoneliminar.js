import axios from "axios";
import React, { useContext, useEffect } from "react";
import { Contexto } from "../Context";

function Buttoneliminar(props) {
  const { Eliminar, setEliminar } = useContext(Contexto);

  useEffect(() => {}, []);
  async function EliminarNota() {
    setEliminar(true);
    await axios
      .delete("https://server-notas.herokuapp.com/" + props.id)
      .then((res) => console.log("eliminado " + res));
  }

  return (
    <div className="btn-delete">
      <i onClick={EliminarNota} className="bx bxs-trash"></i>
    </div>
  );
}

export default Buttoneliminar;
