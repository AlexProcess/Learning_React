import { useState } from "react";
import { GifGrid, AddCategory } from "./Components";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(["One Punch"]);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories]);
        // setCategories((cat) => [...cat, "Valorant"]);
    };

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory
                /*setCategories={setCategories}*/
                onNewCategory={(value) => onAddCategory(value)}
                currentCategory={categories}
            />

            {categories.map((category) => (
                <GifGrid key={category} category={category} />
            ))}
        </>
    );
};
