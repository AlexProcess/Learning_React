import { renderHook } from "@testing-library/react";
import { useCounter } from "../../hooks";

describe("Pruebas en el UseCounter", () => {
    test("Debe de retornar los valores por defecto", () => {
        const { result } = renderHook(() => useCounter(10));
        const { counter, decrement, increment, reset } = result.current;

        expect(counter).toBe(10);
        expect(increment).toEqual(expect.any(Function));
        expect(decrement).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));
    });
    test("debe de generar el counter con el valor de 100", () => {
        const { result } = renderHook(() => useCounter(100));
        const { counter } = result.current;

        expect(counter).toBe(100);
    });
});
