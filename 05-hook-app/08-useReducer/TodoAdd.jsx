import React from "react";
import { useForm } from "../hooks/useForm";

export const TodoAdd = ({ onNewTodo }) => {
    const { description, onInputChange, onResetForm } = useForm({
        description: "",
    });

    const onFormSubmit = () => {
        event.preventDefault();
        if (description.length < 1) return;

        const newTodo = {
            id: new Date().getTime(),
            done: false,
            description: description,
        };
        onNewTodo(newTodo);
        onResetForm();
    };
    return (
        <>
            <form onSubmit={onFormSubmit}>
                <input
                    aria-label="inputAdd"
                    type="text"
                    placeholder="¿Qué hay que hacer?"
                    className="form-control"
                    value={description}
                    onChange={onInputChange}
                    name="description"
                />
                <button type="submit" className="btn btn-outline-primary mt-2">
                    Agregar
                </button>
            </form>
        </>
    );
};
