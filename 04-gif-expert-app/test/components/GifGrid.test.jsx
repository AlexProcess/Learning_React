import { render } from "@testing-library/react";
import { GifGrid } from "../../src/Components/GifGrid";
import PropTypes from "prop-types";

describe("pruebas en <GifGrid/>", () => {
    const category = "One Punch man";

    test("debe de mostrar el loading inicialmente", () => {
        render(<GifGrid category={category} />);
        expect(screen.getByText("Cargando..."));
        expect(screen.getByText(category));
    });
    test("Debe de mostrar imagenes cuando se ejecute el useFetchGifs", () => {});
});

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
};
