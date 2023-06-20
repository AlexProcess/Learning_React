import React, { useContext } from "react";

export const LoginPage = () => {
    const { hola, user } = useContext();
    console.log(hola, user);
    return (
        <>
            <h1>LoginPage</h1>
            <hr />
        </>
    );
};
