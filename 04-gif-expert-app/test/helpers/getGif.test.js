import { string } from "prop-types";

describe("Pruebas en getGifs", () => {
    test("debe de retornar un array de gifs", async () => {
        const gifs = await getGifs("One Punch");
        // console.log(gifs);

        expect(gifs.length).toBeGreatherThan(0);
        expect(gifs[0]).toEqual({
            id: expect.any(string),
            title: expect.any(string),
            url: expect.any(string),
        });
    });
});
