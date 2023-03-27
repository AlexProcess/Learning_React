import React from "react";
import { PropTypes } from "prop-types";

export const FirstApp = (props) => {
    const { title = "Hola soy Alex" } = props;
    const { subTitle = "El diablo puñeeeta" } = props;

    // if (!title) {
    //     throw new Error("El titulo no existe");
    // }

    return (
        <>
            <h1>{title}</h1>
            <p>{subTitle}</p>
        </>
    );
};

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
};
