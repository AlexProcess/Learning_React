const response = require("express");
const { validationResult } = require("express-validator");
const Usuario = require("../models/Usuario");

const crearUsuario = async (req, res = response) => {
    try {
        const usuario = new Usuario(req.body);

        await usuario.save();

        res.status(201).json({
            ok: true,
            msg: "registro",
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: "Por favor hable con el administrador",
        });
    }
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
