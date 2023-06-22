import { MultipleCustomHooks } from "../../03-examples";
import { fireEvent, render, screen } from "@testing-library/react";
import { useFetch } from "../../hooks/useFetch";
import { useCounter } from "../../hooks";

jest.mock("../../hooks/useFetch");
jest.mock("../../hooks/useCounter");
describe("Pruebas en <MultipleCustomHooks/>", () => {
    const mockIncrement = jest.fn();

    useFetch.mockReturnValue({
        data: null,
        isLoading: true,
        hasError: null,
    });

    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement,
    });

    test("Debe de mostrar el componente por defecto", () => {
        render(<MultipleCustomHooks />);

        expect(screen.getByText("BreakingBad Quotes"));

        const nextButton = screen.getByRole("button", { name: "Next quote" });
        expect(nextButton.disabled).toBeTruthy();
    });

    test("debe de mostrar un Quote", () => {
        useFetch.mockReturnValue({
            data: [{ author: "Fernando", quote: "Hola mundo" }],
            isLoading: false,
            hasError: null,
        });

        render(<MultipleCustomHooks />);
        expect(screen.getByText("Hola mundo")).toBeTruthy();
        expect(screen.getByText("Fernando")).toBeTruthy();

        const nextButton = screen.getByRole("button", { name: "Next quote" });
        expect(nextButton.disabled).toBeFalsy();
    });
    test("debe de llamar a la función de incrementar", () => {
        useFetch.mockReturnValue({
            data: [{ author: "Fernando", quote: "Hola mundo" }],
            isLoading: false,
            hasError: null,
        });

        render(<MultipleCustomHooks />);
        const nextButton = screen.getByRole("button", { name: "Next quote" });
        fireEvent.click(nextButton);

        expect(mockIncrement).toHaveBeenCalled();
    });
});
