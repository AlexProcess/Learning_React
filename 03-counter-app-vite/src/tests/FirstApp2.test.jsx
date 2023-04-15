import { render, screen } from "@testing-library/react";
import { FirstApp } from "../FirstApp";

describe("Pruebas en FirstApp.jsx", () => {
    test("La PRIMERA PRUEBA DEBE DE HACER MATCH CON SNAPSHOT", () => {
        const title = "Hola, soy goku";
        const { container } = render(<FirstApp title={title} />);
        expect(container).toMatchSnapshot();
    });
    test("debe de mostrar el mensaje'Hola, soy Gokuy'", () => {
        const title = "Hola, soy goku";
        render(<FirstApp title={title} />);
        expect(screen.getByText(title).toBeTruthy());
    });

    test("debe de mostrar un titulo que este en un h1", () => {
        const title = "Hola, soy goku";
        render(<FirstApp title={title} />);
        expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain();
    });
});
