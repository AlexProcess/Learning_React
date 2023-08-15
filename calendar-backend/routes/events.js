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
router.use(validarJWT);
// Obtener eventos
router.get("/", getEventos);

//Crear nuevo evento
router.post("/", CrearEvento);

//Actualizar evento
router.put("/:id", actualizarEvento);

router.delete("/:id", EliminarEvento);

module.exports = router;
