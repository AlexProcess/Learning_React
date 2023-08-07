/*
  Rutas de usuarios --> Auth <--
  host + api/auth
*/

const { Router } = require("express");
const router = Router();
const { check } = require("express-validator");

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
    ],
    loginUsuario
);

router.get("/renew", revalidarToken);

module.exports = router;
