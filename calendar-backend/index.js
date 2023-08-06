const express = require("express");
require("dotenv").config();

console.log(process.env);

//Crear el servidor de express

const app = express();

//RUTAS
app.use("/api/auth", require("./routes/auth"));
//TODO: CRUD: EVENTOS

//Directorio publico
app.use(express.static("public"));

//Escuchar peticiones
app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});
