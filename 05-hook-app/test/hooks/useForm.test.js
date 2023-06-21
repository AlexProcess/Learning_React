import { renderHook } from "@testing-library/react";
import { useForm } from "../../hooks";
import { act } from "react-dom/test-utils";

describe("Pruebas en UseForm", () => {
    const initialForm = {
        name: "Alex",
        email: "alex@example.com",
    };

    test("debe de devolver los valores por defecto", () => {
        const { result } = renderHook(() => useForm(initialForm));
        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            FormState: initialForm,
            onResetForm: expect.any(Function),
            onInputChange: expect.any(Function),
        });
    });

    test("debe de cambiar el nombre del formulario", () => {
        const newValue = "Juan";
        const { result } = renderHook(() => useForm(initialForm));
        const { onInputChange } = result.current;

        act(() => {
            onInputChange({ target: { name: "name", value: newValue } });
        });
        expect(result.current.name).toBe(newValue);
        expect(result.current.FormState.name).toBe(newValue);
    });
});
