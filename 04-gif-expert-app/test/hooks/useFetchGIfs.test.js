import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGIfs } from "../../src/hooks/useFetchGIfs";

describe("Pruebas en el hook useFetchGifs", () => {
    test("debe de regresar al estado inicial", () => {
        const { result } = renderHook(() => "One punch");
        const { images, isLoading } = result.current;

        expect(images.length).toBe(0);
        expect(isLoading.length).toBeTruthy();

        // useFetchGIfs();
    });
    test("debe de retornar un array de imagenes y isLoading en false", async () => {
        const { result } = renderHook(() => useFetchGIfs("One Punch"));
        await waitFor(() =>
            expect(result.current.images.length).toBeGreaterThan(0)
        );
        const { images, isLoading } = result.current;
        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    });
});
