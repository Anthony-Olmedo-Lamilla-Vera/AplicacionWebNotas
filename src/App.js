import logo from "./logo.svg";
import { io } from "socket.io-client";
import { useContext, useEffect, useState } from "react";
import "./App.css";
import Nota from "./Component/Nota";
import Context from "./Context";
import Inicio from "./Component/Inicio";
function App() {
  return (
    <Context>
      <Inicio />
    </Context>
  );
}

export default App;
