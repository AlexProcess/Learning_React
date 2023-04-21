import { useState, useEffect } from "react";
import { getGifs } from "../Helpers/GetGifs";

export const GifGrid = ({ category }) => {
    const [counter, setCounter] = useState(10);
    useEffect(() => {
        getGifs(category);
    }, []);

    return (
        <>
            <h3>{category}</h3>
            <h3>{counter}</h3>

            <button onClick={() => setCounter(counter + 1)}>+1</button>
        </>
    );
};
