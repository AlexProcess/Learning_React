import { useState } from "react";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(["One Punch", "Dragon Ball"]);

    const onAddCategory = () => {
        setCategories([...categories, "Valorant"]);
        // setCategories((cat) => [...cat, "Valorant"]);
    };

    return (
        <>
            {/* { Titutlo } */}
            <h1>GifExpertApp</h1>

            {/* {Input} */}
            {/* {Listado del gif} */}
            <button onClick={onAddCategory}>Agregar</button>
            <ol>
                {categories.map((category) => {
                    return <li key={category}>{category}</li>;
                })}
                {/* <li>Abc</li> */}
            </ol>

            {/* {Gif item} */}
        </>
    );
};
