import { render, screen } from "@testing-library/react";
import { HomePage } from "../../09-UseContext/HomePage";
import { UserContext } from "../../09-UseContext/context/UserContext";

describe("Pruebas en el </HomePage>", () => {
    const user = {
        id: 1,
        name: "Fernando",
    };
    test("debe de mostrar el componente sin el usuario", () => {
        render(
            <UserContext.Provider value={{ user: null }}>
                <HomePage />
            </UserContext.Provider>
        );
        // screen.debug();

        const preTag = screen.getByLabelText("pre");
        expect(preTag.innerHTML).toBe("null");
    });

    test("debe de mostrar el componente CON el usuario", () => {
        render(
            <UserContext.Provider value={{ user }}>
                <HomePage user={user} />
            </UserContext.Provider>
        );
        // screen.debug();

        const preTag = screen.getByLabelText("pre");
        expect(preTag.innerHTML).toContain(user.name);
        expect(preTag.innerHTML).toContain(user.id.toString());
    });
});
