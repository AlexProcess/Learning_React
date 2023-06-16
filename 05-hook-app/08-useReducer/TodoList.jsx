import React from "react";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {
    return (
        <>
            <ul className="list-group">
                <TodoItem></TodoItem>
            </ul>
        </>
    );
};
