import React from "react";
import { PropTypes } from "prop-types";

export const FirstApp = (props) => {
    const { title = "Hola soy Alex" } = props;
    const { subTitle = "Soy un subtitulos" } = props;
    const { nombre = "" } = props;

    // if (!title) {
    //     throw new Error("El titulo no existe");
    // }

    return (
        <>
            <h1 data-testid="test-title">{title}</h1>
            <p>{subTitle}</p>
            <p>{subTitle}</p>
            <p>{nombre}</p>
        </>
    );
};

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
    nombre: PropTypes.string.isRequired,
};

FirstApp.defaultProps = {
    title: "No hay un titulo",
    subTitle: "No hay un subtitulo",
    nombre: "Alex Tercero",
};
