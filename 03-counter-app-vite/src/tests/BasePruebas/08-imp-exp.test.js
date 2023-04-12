import { getHeroeById, getHeroesByOwner } from "../../BasePruebas/08-imp-exp";

describe("Pruebas en 08-imp-exp", () => {
    test("getHeroeById debe retornar un héroe por ID", () => {
        const id = 1;
        const hero = getHeroeById(id);

        expect(hero).toEqual({
            id: 1,
            name: "Batman",
            owner: "DC",
        });
    });
    test("getHeroeById debe retornar un undefined si el ID no existe", () => {
        const id = 100;
        const hero = getHeroeById(id);

        expect(hero).toBeFalsy();
    });
    test("getHeroesByOwner tiene que retornar un array con los heroes de DC (length === 3) y otro con Marver (length === 2)", () => {
        const owner = "Marvel";
        const heroes = getHeroesByOwner(owner);

        console.log(heroes);

        expect(heroes.length).toBe(2);
        expect(heroes).toEqual([
            { id: 2, name: "Spiderman", owner: "Marvel" },
            { id: 5, name: "Wolverine", owner: "Marvel" },
        ]);
    });
});
