import { renderHook } from "@testing-library/react";
import { useCounter } from "../../hooks";
import { act } from "react-dom/test-utils";

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

    test("debe de incrementar el contador", () => {
        const { result } = renderHook(() => useCounter(100));
        const { increment } = result.current;

        act(() => {
            increment(3);
        });

        expect(result.current.counter).toBe(103);
    });

    test("debe de decrementar el contador", () => {
        const { result } = renderHook(() => useCounter(100));
        const { decrement } = result.current;

        act(() => {
            decrement(3);
        });

        expect(result.current.counter).toBe(97);
    });

    test("debe de resetear el contador", () => {
        const { result, initialValue } = renderHook(() => useCounter());
        const { reset } = result.current;

        act(() => {
            reset(initialValue);
        });

        expect(result.current.counter).toBe(10);
    });
});
