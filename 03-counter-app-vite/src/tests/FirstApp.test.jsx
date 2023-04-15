import { render } from "@testing-library/react";
import { FirstApp } from "../FirstApp";

describe("Pruebas en FirstApp.jsx", () => {
    // test("debe de hacer match con el snapshot", () => {
    //     const title = "Hola soy Goku";
    //     const { container } = render(<FirstApp title={title} />);
    //     expect(container).toMatchSnapshot();
    // });

    test("debe de mostrar un titulo en un h1", () => {
        const title = "Hola soy Goku";
        const { container, getByText, getByTestId } = render(
            <FirstApp title={title} />
        );

        expect(getByText(title)).toBeTruthy();

        // const h1 = container.querySelector("H1");
        // expect(h1.innerHTML).toContain(title);
        expect(getByTestId("test-title").innerHTML).toBe(title);
    });

    test("debe de mostrar el subtitulo enviado por props", () => {
        const title = "Hola soy Goku";
        const subTitle = "Soy un subtitulo";
        const { getByText } = render(
            <FirstApp title={title} subTitle={subTitle} />
        );
        expect(getByText(subTitle)).toBeTruthy();
    });
});
