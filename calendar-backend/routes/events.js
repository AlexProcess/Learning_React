/*
EVENTS ROUTES
/api/events
*/

const { Router } = require("express");
router = Router();

const { validarJWT } = require("../middlewares/validar-jwt");
const {
    EliminarEvento,
    actualizarEvento,
    CrearEvento,
    getEventos,
} = require("../controllers/events");
//Todas tienen que pasar por la validación del token
// Obtener eventos
router.get("/", validarJWT, getEventos);

//Crear nuevo evento
router.post("/", validarJWT, CrearEvento);

//Actualizar evento
router.put("/:id", validarJWT, actualizarEvento);

router.delete("/:id", validarJWT, EliminarEvento);

module.exports = router;
