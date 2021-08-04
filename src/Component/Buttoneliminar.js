import axios from "axios";
import React, { useEffect } from "react";

function Buttoneliminar(props) {
  useEffect(() => {}, [props.id]);
  async function EliminarNota() {
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
