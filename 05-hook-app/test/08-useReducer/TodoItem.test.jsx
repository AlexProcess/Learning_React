import { render, screen } from "@testing-library/react";
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
    test("Debe de mostrar el ToDo pendiente de completar", () => {
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
        expect(spanElement.className).toContain("align-self-center");

        screen.debug();
    });
});
