export const getImagen = async () => {
    try {
        const apiKey = "fXG3ufkWLWn5KKeDz6bmRPa0i8ASXXKg";
        const resp = await fetch(
            `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
        );
        const { data } = await resp.json();

        const { url } = data.images.original;

        return url;
    } catch (error) {
        // manejo del error
        console.error(error);
        return "No se encontró la imagen";
    }
};

getImagen();
