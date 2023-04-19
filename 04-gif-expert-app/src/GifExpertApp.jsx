import { useState } from "react";
import { AddCategory } from "./Components/AddCategory";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(["One Punch", "Dragon Ball"]);

    const onAddCategory = (newCategory) => {
        console.log(newCategory);
        setCategories([newCategory, ...categories]);
        // setCategories((cat) => [...cat, "Valorant"]);
    };

    return (
        <>
            {/* { Titutlo } */}
            <h1>GifExpertApp</h1>

            {/* {Input} */}
            <AddCategory
                /*setCategories={setCategories}*/ onNewCategory={(value) =>
                    onAddCategory(value)
                }
            />
            {/* {Listado del gif} */}
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
