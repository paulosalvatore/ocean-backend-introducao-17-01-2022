const express = require("express");
const app = express();

// Sinalizo para o Express que o body das requisições
// estará sempre estruturado em JSON
app.use(express.json());

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

// [GET] "/herois/:id" - Read Single (by Id) (Ler um registro pelo ID)
app.get("/herois/:id", function (req, res) {
    const id = req.params.id - 1;

    const item = lista[id];

    res.send(item);
});

// [POST] "/herois" - Create (Criar um registro)
app.post("/herois", function (req, res) {
    const item = req.body.nome;

    lista.push(item);

    res.send("Item adicionado com sucesso.");
});

app.listen(3000);
