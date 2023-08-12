const jwt = require("jsonwebtoken");

const generarJWT = (uid, name) => {
    const payload = { uid, name };

    const token = jwt.sign(payload, process.env.SECRET_JWT_SEED, {
        expiresIn: "24h",
    });

    if (!token) {
        return "no se pudo generar el token";
    }
    return token;
};

module.exports = {
    generarJWT,
};
