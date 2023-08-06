const express = require("express");
require("dotenv").config();

console.log(process.env);

//Crear el servidor de express

const app = express();

//RUTAS

// app.get("/", (req, res) => {
//     res.json({
//         ok: true,
//     });
// });

//Directorio publico
app.use(express.static("public"));

//Escuchar peticiones
app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});
