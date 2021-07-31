import logo from "./logo.svg";
import { io } from "socket.io-client";
import { useContext, useEffect, useState } from "react";
import "./App.css";
import Nota from "./Component/Nota";
import Axios from "axios";
import CreacionNote from "./Component/CreacionNote";
import Modal from "./Component/Modal";
import Context, { Contexto, contexto } from "./Context";
import { useValor } from "./Component/useConf";
import Inicio from "./Component/Inicio";
function App() {
  return (
    <Context>
      <Inicio />
    </Context>
  );
}

export default App;
