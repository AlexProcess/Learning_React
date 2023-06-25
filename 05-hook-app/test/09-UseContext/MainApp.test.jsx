import { render, screen } from "@testing-library/react";
import { MainApp } from "../../09-UseContext/MainApp";
import { MemoryRouter } from "react-router-dom";
import { LoginPage } from "../../09-UseContext/LoginPage";

describe("Pruebas en el componente <MainApp/>", () => {
    test("debe de mostrar el HomePage", () => {
        render(
            <MemoryRouter>
                <MainApp />
            </MemoryRouter>
        );
        expect(screen.getByText("HomePage")).toBeTruthy();
    });
    test("debe de mostrar el LoginPage", () => {
        render(
            <MemoryRouter initialEntries={["/login"]}>
                <MainApp />
            </MemoryRouter>
        );

        expect(screen.getByText("LoginPage")).toBeTruthy();
        // screen.debug()
    });
});
