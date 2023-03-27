import React from "react";

export const FirstApp = (props) => {
    const { title = "Hola, soy Alex =)" } = props;
    const { subTitle = "11111" } = props;

    return (
        <>
            <h1>{title}</h1>
            <p>{subTitle + 1}</p>
        </>
    );
};
