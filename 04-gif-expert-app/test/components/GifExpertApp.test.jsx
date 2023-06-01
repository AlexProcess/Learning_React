import { render } from "@testing-library/react";
import { GifExpertApp } from "../../src/GifExpertApp";

describe("Pruebas en <GifExpertApp/>", () => {
    const category = "AnuelAA";

    test("", () => {
        render(<GifExpertApp />);
        screen.debug(undefined, Infinity);

        newCategory = category;
    });
});
