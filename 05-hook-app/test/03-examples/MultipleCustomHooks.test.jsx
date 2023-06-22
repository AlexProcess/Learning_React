import { MultipleCustomHooks } from "../../03-examples";
import { render, screen } from "@testing-library/react";

describe("Pruebas en <MultipleCustomHooks/>", () => {
    test("Debe de mostrar el componente por defecto", () => {
        render(<MultipleCustomHooks />);

        expect(screen.getByText("Loading..."));
        expect(screen.getByText("BreakingBad Quotes"));

        const nextButton = screen.getByRole("button", { name: "Next quote" });
        expect(nextButton.disabled).toBeTruthy();
    });
});