import React from "react";

export const TodoAdd = () => {
    return (
        <>
            <form>
                <input
                    type="text"
                    placeholder="¿Qué hay que hacer?"
                    className="form-control"
                />
                <button type="submit" className="btn btn-outline-primary mt-2">
                    Agregar
                </button>
            </form>
        </>
    );
};
