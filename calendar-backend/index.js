const express = require("express");

//Crear el servidor de express

const app = express();

//RUTAS

app.get("/", (req, res) => {
    console.log("se requiere el slash");
    res.json({
        ok: true,
    });
});

//Escuchar peticiones
app.listen(4000, () => {
    console.log(`Server running on port ${4000}`);
});
