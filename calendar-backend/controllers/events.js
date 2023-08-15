const { response } = require("express");

const getEventos = (req, res) => {
    res.json({
        ok: true,
        msg: "getEventos",
    });
};

const CrearEvento = (req, res) => {
    res.json({
        ok: true,
        msg: "CrearEvento",
    });
};

const actualizarEvento = (req, res) => {
    res.json({
        ok: true,
        msg: "actualizarEvento",
    });
};

const EliminarEvento = (req, res) => {
    res.json({
        ok: true,
        msg: "EliminarEvento",
    });
};

module.exports = {
    getEventos,
    CrearEvento,
    actualizarEvento,
    EliminarEvento,
};
