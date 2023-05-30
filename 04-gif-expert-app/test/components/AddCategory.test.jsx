import { AddCategory } from "../../src/Components/AddCategory";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Pruebas en <AddCategory.jsx/>", () => {
    test("debe de cambiar el valor de la caja de texto", () => {
        render(<AddCategory onNewCategory={() => {}} />);
        const input = screen.getByRole("textbox");

        fireEvent.input(input, { target: { value: "Saitama" } });

        expect(input.value).toBe("Saitama");
        screen.debug();
    });

    test("debe de llamar onNewCategory si el input tiene un valor", () => {
        const inputValue = "Saitama";
        //To Do ????
        render(<AddCategory onNewCategory={() => {}} />);

        const input = screen.getByRole("textbox");
        const form = screen.getByRole("form");

        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form);
        // screen.debug();
        expect(input.value).toBe("");
    });
});
