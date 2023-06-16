import { useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { TodoAdd } from "./TodoAdd";

const initialState = [
    {
        id: new Date().getTime() * 3,
        description: "recolectar la piedra alma",
        done: false,
    },
    {
        id: new Date().getTime(),
        description: "recolectar la piedra del tiempo",
        done: false,
    },
];

export const TodoApp = () => {
    const [todos, dispatch] = useReducer(todoReducer, initialState);
    return (
        <>
            <h1>
                TodoApp: 10 <small>pendientes: 2</small>
            </h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    {/* {TodoList} */}
                    <ul className="list-group">
                        {todos.map((todo) => (
                            <li
                                //TodoItem
                                key={todo.id}
                                className="list-group-item d-flex justify-content-between"
                            >
                                <span className="align-self-center">
                                    Item 1
                                </span>
                                <button className="btn btn-danger">
                                    Borrar
                                </button>
                            </li>
                        ))}
                    </ul>
                    {/* {TodoList} */}
                </div>
                <div className="col-5">
                    <h4>Agregar ToDo</h4>
                    <hr />
                    <TodoAdd />
                </div>
            </div>
        </>
    );
};
