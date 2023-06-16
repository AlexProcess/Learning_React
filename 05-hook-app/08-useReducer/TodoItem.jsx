import React from "react";

export const TodoItem = () => {
    return (
        <>
            {todos.map((todo) => (
                <li
                    //TodoItem
                    key={todo.id}
                    className="list-group-item d-flex justify-content-between"
                >
                    <span className="align-self-center">Item 1</span>
                    <button className="btn btn-danger">Borrar</button>
                </li>
            ))}
        </>
    );
};
