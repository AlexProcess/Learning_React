import React from "react";

export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
    return (
        <>
            <li className="list-group-item d-flex justify-content-between">
                <span
                    aria-label="span"
                    className={`align-self-center ${
                        todo.done ? "text-decoration-line-through" : ""
                    }`}
                    onClick={() => onToggleTodo && onToggleTodo(todo.id)}
                >
                    {todo.description}
                </span>
                <button
                    aria-label="deleteButton"
                    className="btn btn-danger"
                    onClick={() => onDeleteTodo(todo.id)}
                >
                    Borrar
                </button>
            </li>
        </>
    );
};
