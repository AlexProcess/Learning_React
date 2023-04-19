import { useState } from "react";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(["One Punch"]);

    console.log();

    return (
        <>
            {/* { Titutlo } */}
            <h1>GifExpertApp</h1>

            {/* {Input} */}
            <ol>
                {categories.map((category) => {
                    return <li key={category}>Hola</li>;
                })}
                {/* <li>Abc</li> */}
            </ol>

            {/* {Gif item} */}
        </>
    );
};
