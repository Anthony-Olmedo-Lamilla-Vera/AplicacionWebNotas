import axios from "axios";
import React, { useEffect } from "react";

function Buttoneliminar(props) {
  useEffect(() => {}, [props.id]);
  function EliminarNota() {
    axios
      .delete("http://localhost:5000/" + props.id)
      .then((res) => console.log("eliminado " + res));
  }

  return (
    <div className="btn-delete">
      <i onClick={EliminarNota} className="bx bxs-trash"></i>
    </div>
  );
}

export default Buttoneliminar;
