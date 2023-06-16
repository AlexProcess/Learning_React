import { useReducer } from "react";
import { todoReducer } from "./todoReducer";

const initialState = [
    {
        id: newDate().getTime() * 3,
        description: "recolectar la piedra alma",
        done: false,
    },
    {
        id: newDate().getTime(),
        description: "recolectar la piedra alma",
        done: false,
    },
];

export const TodoApp = () => {
    const [todos, dispatch] = useReducer(todoReducer, initialState);
    return (
        <>
            <h1>TodoApp</h1>
            <hr />

            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
        </>
    );
};
