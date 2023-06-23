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
    test("debe de eliminar un ToDo", () => {
        const action = {
            type: "[TODO] Delete todo",
            payload: 1,
        };
        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(0);
    });

    test("debe de realizar el TOGGLE de el ToDo", () => {
        const action = {
            type: "[TODO] Toggle todo",
            payload: 1,
        };

        const newState = todoReducer(initialState, action);
        expect(newState[0].done).toBeTruthy();

        // const newState2 = todoReducer(newState2, action);
        // expect(newState2[0].done).toBe(false);
    });
});
