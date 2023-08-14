/*
  Rutas de usuarios --> Auth <--
  host + api/auth
*/

const { Router } = require("express");
const router = Router();
const { check } = require("express-validator");
const { validarCampos } = require("../middlewares/validar-campos");
const { validarJWT } = require("../middlewares/validar-jwt");

const {
    crearUsuario,
    loginUsuario,
    revalidarToken,
} = require("../controllers/auth");

router.post(
    "/new",
    // midlewares
    [check("name", "el nombre es obligatorio").not().isEmpty()],
    [check("email", "el email es obligatorio").isEmail()],
    [
        check(
            "password",
            "el password debe de ser minimo de 6 caracteres"
        ).isLength({ min: 6 }),
    ],
    crearUsuario
);

router.post(
    "/",
    [
        [check("email", "el email es obligatorio").isEmail()],
        [
            check(
                "password",
                "el password debe de ser minimo de 6 caracteres"
            ).isLength({ min: 6 }),
        ],
        validarCampos,
    ],
    loginUsuario
);

router.get("/renew", validarJWT, revalidarToken);

module.exports = router;
