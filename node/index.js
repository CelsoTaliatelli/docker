const express = require("express");
const app = express();
const port = 3000;

app.get((req,res) => {
    res.send('<h1>Olá Docker Node</h1>')
})

app.listen(port, () => {
    console.log(`Rodando aplicação na porta ${port}`);
})