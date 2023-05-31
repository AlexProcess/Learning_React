import { render } from "@testing-library/react";
import { GifGrid } from "../../src/Components/GifGrid";
import { useFetchGIfs } from "../../src/hooks/useFetchGIfs";
import PropTypes from "prop-types";

jest.mock("../../src/hooks/useFetchGIfs");

describe("pruebas en <GifGrid/>", () => {
    const category = "One Punch man";

    test("debe de mostrar el loading inicialmente", () => {
        useFetchGIfs.mockReturnValue({
            images: [],
            isLoading: true,
        });
        render(<GifGrid category={category} />);
        expect(screen.getByText("Cargando..."));
        expect(screen.getByText(category));
    });
    test("Debe de mostrar imagenes cuando se ejecute el useFetchGifs", () => {
        const gifs = [
            {
                id: abc,
                title: Saitama,
                url: "https://localhost/saitama.jpg",
            },
            {
                id: bb,
                title: AnuelAA,
                url: "https://localhost/AnuelAA.jpg",
            },
        ];

        useFetchGIfs.mockReturnValue({
            images: gifs,
            isLoading: false,
        });

        render(<GifGrid category={category} />);
        expect(screen.getAllByRole("img").length), toBe(2);
    });
});

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
};
