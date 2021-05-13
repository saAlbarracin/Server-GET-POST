const express = require("express");
const app = express();
const path = require('path');
const PUERTO = 3000;

app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/login", function (req, res) {
  res.send(`Hola ${req.body.user} ${req.body.nickname} ${req.body.surname}`);
});

app.listen(PUERTO, function () {
  console.log("Servidor listo, iniciando en puerto 3000...");
});
