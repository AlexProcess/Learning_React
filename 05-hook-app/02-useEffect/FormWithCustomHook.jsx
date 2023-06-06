import { useEffect, useState } from "react";
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
    const { formState, onInputChange, username, email, password } = useForm({
        username: "",
        email: "",
        password: "",
    });

    // const { username, email, password } = formState;

    useEffect(() => {
        // console.log("useEffect called!");
    }, []);

    useEffect(() => {
        // console.log("formState changed!");
    }, [formState]);

    useEffect(() => {
        // console.log("Email changed!");
    }, [email]);

    return (
        <>
            <h1>Formulario con custom hook</h1>

            <hr />

            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            />
            <input
                type="email"
                className="form-control mt-3"
                placeholder="alex@google.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />
            <input
                type="password"
                className="form-control mt-3"
                placeholder="pon tu contraseña pa quitarte los dineros"
                name="password"
                value={password}
                onChange={onInputChange}
            />
        </>
    );
};
