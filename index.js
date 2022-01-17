const express = require("express");
const app = express();

app.get("/", function (req, res) {
    res.send("Hello World");
});

const lista = ["Mulher Maravilha", "Capitã Marvel", "Homem de Ferro"];

// [GET] "/herois" - Read All (Ler todos os registros)
app.get("/herois", function (req, res) {
    res.send(lista);
});

app.listen(3000);
