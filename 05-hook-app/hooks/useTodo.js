import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const init = () => {
    let dataInLocal = localStorage.getItem("task");
    return dataInLocal ? JSON.parse(dataInLocal) : [];
};

export const useTodo = () => {
    const initialState = [];
    const [todos, dispatch] = useReducer(todoReducer, initialState, init);
    const todosCount = todos.length;
    const pendingTodosCounter = todos.filter(() => !todos.done).length;

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const handleNewTodo = (todo) => {
        const action = {
            type: "[TODO] Add todo",
            payload: todo,
        };
        dispatch(action);
    };

    const handleDeleteTodo = (id) => {
        dispatch({
            type: "[TODO] Delete todo",
            payload: id,
        });
    };

    const handleToggleTodo = (id) => {
        dispatch({
            type: "[TODO] Toggle todo",
            payload: id,
        });
    };
    return {
        handleNewTodo,
        handleToggleTodo,
        handleDeleteTodo,
        todos,
        todosCount,
        pendingTodosCounter,
    };
};
