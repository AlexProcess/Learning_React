import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../CounterApp";

describe("Pruebas en el <CounterApp />", () => {
    const initialValue = 10;

    test("debe de hacer match con el snapshot", () => {
        const { container } = render(<CounterApp value={initialValue} />);
        expect(container).toMatchSnapshot();
    });

    test("debe de mostar el valor inicial de 100", () => {
        render(<CounterApp value={100} />);
        expect(screen.getByText(100)).toBeTruthy();
    });

    test("debe de incrementar con el boton de +1", () => {
        render(<CounterApp value={initialValue} />);
        fireEvent.click(screen.getByText("+1"));
        expect(screen.getByText("11")).toBeTruthy();
    });

    test("debe de decrementar con el boton de -11", () => {
        render(<CounterApp value={initialValue} />);
        fireEvent.click(screen.getByText("-1"));
        expect(screen.getByText("9")).toBeTruthy();
    });

    test("debe de funcionar el boton de reset", () => {
        render(<CounterApp value={initialValue} />);
        fireEvent.click(screen.getByText("-1"));
        fireEvent.click(screen.getByText("-1"));
        fireEvent.click(screen.getByText("-1"));
        fireEvent.click(screen.getByText("Reset"));
        // expect(screen.getByText(10)).toBeTruthy();
        fireEvent.click(screen.getByRole("button", { name: "btn-reset" }));
    });
});
