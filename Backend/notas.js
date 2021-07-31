const { urlencoded } = require("express");
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
app.use(express.json());
app.use(cors());
mongoose
  .connect(
    "mongodb+srv://antocraxx:perfect12@cluster0.feg8c.mongodb.net/Notes?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then((db) => console.log("conctado3......" + db))
  .catch((err) => console.log("err" + err));

const nota = mongoose.Schema({
  titulo: String,
  Descipcion: String,
  fecha: Date,
});

const modelNota = mongoose.model("Nota", nota);
app.get("/", async (req, res) => {
  const val = await modelNota.find();
  const resp = res.json(val);
  resp.send(resp);
});
app.post("/", (req, res) => {
  const { Titulo, Descripcion } = req.body;
  const ver = new modelNota({
    titulo: Titulo,
    Descipcion: Descripcion,
    fecha: Date.now(),
  });
  console.log(req.body);

  console.log(ver);
  ver.save().then(() => console.log("Guardado corrrectamente"));
});

app.listen(5000, () => {
  console.log("conectadoaaaaaaaaa");
});
