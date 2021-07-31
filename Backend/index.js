const io = require("socket.io")(5000, {
  cors: {
    origin: "http://localhost:3000",
  },
});
//const express = require("express");
//const app = express();
io.on("connection", (socket) => {
  console.log("conectado.......");
  socket.on("mesage", (body) => {
    console.log("conectasasado......." + body);
    socket.broadcast.emit("mesages", {
      body,
      from: socket.id.slice(2),
    });
  });
});
