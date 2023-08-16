const { response } = require("express");
const Evento = require("../models/Evento");
const getEventos = async (req, res) => {
    const eventos = await Evento.find({}).populate("user", "name password");

    res.json({
        ok: true,
        eventos,
    });
};

const CrearEvento = async (req, res = response) => {
    // Verificar que tenga el evento
    const evento = new Evento(req.body);

    try {
        // Asignar el usuario antes de guardar el evento
        evento.user = req.uid;

        const eventoGuardado = await evento.save();

        res.json({
            ok: true,
            evento: eventoGuardado,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: "Hable con el administrador",
        });
    }

    console.log(req.body);
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
