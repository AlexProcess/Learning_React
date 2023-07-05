import React, { useContext } from "react";
import { UserContext } from "./context/UserContext";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../heroes-spa/src/auth/context";

export const LoginPage = () => {
    // const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate()
    const {login} = useContext(AuthContext)

    const onLogin = () => {
        const lastPath = localStorage.getItem("lastPath") || "/";
        
        login("Alex Tercero")

        Navigate("lastPath",{
            replace: true
        });
    }
    return (
        <>
            <h1>LoginPage</h1>
            <hr />

            <pre aria-label="pre">{JSON.stringify(user, null, 3)}</pre>

            <button
                className="btn btn-primary"
                onClick={onLogin}
            >
                Establecer usuario
            </button>
        </>
    );
};
