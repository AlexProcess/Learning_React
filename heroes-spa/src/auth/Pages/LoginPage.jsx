import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context";
import { useContext } from "react";
export const LoginPage = () => {

    const {login} = useContext(AuthContext)
    const navigate = useNavigate();

    const onLogin = () => {

        navigate("/marvel", {
            replace: true,
        });

        login("Alex Tercero")
    };

    return (
        <div className=" container mt-5">
            <h1>LoginPage</h1>
            <hr />

            <button className="btn btn-primary" onClick={onLogin}>
                Login
            </button>
        </div>
    );
};
