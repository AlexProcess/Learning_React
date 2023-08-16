/*
EVENTS ROUTES
/api/events
*/

const { Router } = require("express");
router = Router();
const { check } = require("express-validator");
const { isDate } = require("../helpers/isDate");
const { validarCampos } = require("../middlewares/validar-campos");
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
router.post(
    "/",
    [
        check("title", "El titulo es obligatorio").not().isEmpty(),
        check("start", "Fecha de inicio es obligatoria").custom(isDate),
        check("end", "La fecha de fin es obligatoria").custom(isDate),
        validarCampos,
    ],
    CrearEvento
);

//Actualizar evento
router.put("/:id", actualizarEvento);

router.delete("/:id", EliminarEvento);

module.exports = router;
