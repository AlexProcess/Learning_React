import { getAllByText, render, screen } from "@testing-library/react";
import { FirstApp } from "../FirstApp";

describe("Pruebas en FirstApp.jsx", () => {
    const title = "Hola, soy goku";
    const subTitle = "Soy un subtitulo";

    test("La PRIMERA PRUEBA DEBE DE HACER MATCH CON SNAPSHOT", () => {
        const { container } = render(<FirstApp title={title} />);
        expect(container).toMatchSnapshot();
    });
    test("debe de mostrar el mensaje'Hola, soy Gokuy'", () => {
        render(<FirstApp title={title} />);
        expect(screen.getByText(title)).toBeTruthy();
    });

    test("debe de mostrar un titulo que este en un h1", () => {
        render(<FirstApp title={title} />);
        expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(
            title
        );
    });

    test("debe de mostrar el subtitulo enviado por props", () => {
        render(<FirstApp title={title} subTitle={subTitle} />);

        expect(screen.getAllByText(subTitle).length).toBe(2);
    });
});
