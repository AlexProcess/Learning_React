import { useState } from "react";
import { AddCategory } from "./Components/AddCategory";

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
            <AddCategory />
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
