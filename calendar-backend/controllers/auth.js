const response = require("express");
const { validationResult } = require("express-validator");

const crearUsuario = (req, res = response) => {
    const { name, email, password } = req.body;

    //Manejo de errores
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped(),
        });
    }

    if (name.length < 5) {
        return res.status(400).json({
            ok: false,
            msg: "El nombre debe de ser de 5 letras",
        });
    }

    res.json({
        ok: true,
        msg: "registro",
        name,
        email,
        password,
    });
};

const loginUsuario = (req, res = response) => {
    //Manejo de errores

    const { name, email, password } = req.body;

    res.json({
        ok: true,
        msg: "login",
        email,
        password,
    });
};

const revalidarToken = (req, res = response) => {
    res.json({
        ok: true,
        msg: "renew",
    });
};

module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken,
};
