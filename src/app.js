const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "DevFlow Solutions - E-commerce funcionando!"
    });
});

app.get("/produtos", (req, res) => {
    res.json([
        {
            id: 1,
            nome: "Notebook",
            preco: 3500
        },
        {
            id: 2,
            nome: "Mouse",
            preco: 100
        }
    ]);
});

if (require.main === module) {
    app.listen(3000, () => {
        console.log("Servidor executando em http://localhost:3000");
    });
}

module.exports = app;