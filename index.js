const express = require("express");
const app = express();

// Endpoint "/"
app.get("/", function (req, res) {
    res.send("Hello, World!");
});

// Endpoint "/oi"
app.get("/oi", function (req, res) {
    res.send("Olá, mundo!");
});

const lista = ["Mulher Maravilha", "Capitã Marvel", "Homem de Ferro"];
//              0                   1                2

// [GET] "/herois" - Read All (Ler todos os registros)
app.get("/herois", function (req, res) {
    res.send(lista);
});

app.listen(3000);
