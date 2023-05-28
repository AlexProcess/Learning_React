import { render } from "@testing-library/react";
import { GifItem } from "../../src/Components/GifItem";

describe("Pruebas en <GifItem/>", () => {
    const title = "Anuel";
    const url = "https://anuelAA/anuel1millon.jpg.com";

    test("debe de hacer match con el snapshot", () => {
        render(<GifItem />);
        expect(container).toMatchSnapshot(url);
    });
});
