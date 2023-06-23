import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../08-useReducer/TodoItem";

describe("pruebas en el componente <TodoItem/>", () => {
    const todo = {
        id: 1,
        description: "Piedra del Alma",
        done: false,
    };
    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach(() => jest.clearAllMocks());
    test("debe de mostrar el Todo Pendiente de completar", () => {
        render(
            <TodoItem
                todo={todo}
                onToggleTodo={onToggleTodoMock}
                onDeleteTodo={onDeleteTodoMock}
            />
        );

        const liElements = screen.getAllByRole("listitem");

        liElements.forEach((liElement) => {
            expect(liElement.className).toBe(
                "list-group-item d-flex justify-content-between"
            );
        });
    });

    test("Debe de mostrar el ToDo completado", () => {
        todo.done = true;

        render(
            <TodoItem
                todo={todo}
                onToggleTodo={onDeleteTodoMock}
                onDeleteTodo={onDeleteTodoMock}
            />
        );
        const liElement = screen.getByRole("listitem");
        expect(liElement.className).toBe(
            "list-group-item d-flex justify-content-between"
        );

        const spanElement = screen.getByLabelText("span");
        expect(spanElement.className).not.toContain(
            "text-decoration-line-throught"
        );
    });

    test("El span debe de llamar el toggle todo cuando se hace onClick", () => {});
    render(
        <TodoItem
            todo={todo}
            onToggleTodo={onToggleTodoMock}
            onDeleteTodo={onDeleteTodoMock}
        />
    );
    const spanElement = screen.getByLabelText("span");
    fireEvent.click(spanElement);
    expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);

    test("button debe de llamar el delete todo", () => {
        render(
            <TodoItem
                todo={todo}
                onToggleTodo={onToggleTodoMock}
                onDeleteTodo={onDeleteTodoMock}
            />
        );
        const buttonElement = screen.getByLabelText("deleteButton");
        fireEvent.click(buttonElement);
        expect(onDeleteTodoMock).toHaveBeenCalled();
    });
});
