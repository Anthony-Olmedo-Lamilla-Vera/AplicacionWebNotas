import axios from "axios";
import React, { useEffect, useState } from "react";
import Nota from "./Nota";

function DataNota() {
  const [Data, setData] = useState([]);

  const obtener = async () => {
    await axios
      .get("https://server-notas.herokuapp.com/")
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((err) => console.log("No conecto  bds rua" + err));
  };
  useEffect(() => {
    obtener();
  }, [Data]);
  return (
    <div>
      {Data.map((res) => {
        return (
          <Nota
            titulo={res.titulo}
            id={res._id}
            description={res.Descipcion}
            fecha={res.fecha}
          />
        );
      })}
    </div>
  );
}

export default DataNota;
