import { todoReducer } from "../../08-useReducer/todoReducer";

describe("Pruebas en todoReducer", () => {
    const initialState = [
        {
            id: 1,
            description: "Demo Todo",
            done: false,
        },
    ];

    test("debe de devolver el estado incial", () => {
        const newState = todoReducer(initialState, {});
        expect(newState).toStrictEqual(initialState);
    });
    test("debe de agregar un todo", () => {
        const action = {
            type: "[TODO] Add todo",
            payload: {
                id: 2,
                description: "Nuevo todo #2",
                done: false,
            },
        };

        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(2);
        expect(newState).toContain(action.payload);
    });
    test("debe de realizar el TOGGLE de el ToDo", () => {});
});
