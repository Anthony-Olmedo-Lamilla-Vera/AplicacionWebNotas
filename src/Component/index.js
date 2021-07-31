import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

function Index() {
  const [Nombre, setNombre] = useState("hggg");
  const [Mensaje, setMensaje] = useState([]);
  const [Socket, setStack] = useState(null);
  const [Text, setText] = useState("");

  useEffect(() => {
    setStack(io("http://localhost:5000"));
    Socket?.on("mesages", (mesage) => {
      console.log(mesage);
      setMensaje([mesage, ...Mensaje]);
    });
  }, [Mensaje]);
  const handlet = (event) => {
    const body = setText(event.target.value);
    Socket?.emit("mesage", body);

    if (event.keyCode === 13 && body) {
      const message = {
        body,
        from: "yo",
      };
      setMensaje([...Mensaje, message]);
      console.log(body);
      event.target.value = "";
    }
  };
  return (
    <div>
      <header className="App-header">
        <h1>Hola bienvenido a mi chat simple con react</h1>
      </header>
      <input type="text" onKeyUp={handlet} />

      {Mensaje.map((x) => {
        console.log(Mensaje);
        return (
          <li>
            {x.from} : {x.body}
          </li>
        );
      })}
    </div>
  );
}

export default Index;
