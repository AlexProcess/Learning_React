import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/Components/GifItem";

describe("Pruebas en <GifItem/>", () => {
    const title = "Saitama";
    const url = "https://anuelaa/saitama.jpg.com";

    test("debe de hacer match con el snapshot", () => {
        const { container } = render(<GifItem title="" url="" cd />);
        expect(container).toMatchSnapshot();
    });

    test("debe de mostrar la imgaen indicada con la url indicada", () => {
        render(<GifItem title={title} url={url} />);
        // screen.debug();
        // expect(screen.getByRole("img").src);
        const { src, alt } = screen.getByRole("img");
        expect(src).toBe(url);
        expect(src).toBe(alt);
    });
    test("debe de mostrar el titulo del componente", () => {
        render(<GifItem title={title} url={url} />);

        expect(screen.getByText(title)).toBeTruthy();
    });
});
