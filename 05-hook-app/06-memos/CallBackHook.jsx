import { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallBackHook = () => {
    const [counter, setCounter] = useState(10);

    const incrementFather = useCallback(
        (value) => {
            setCounter((c) => c + value);
        },
        [counter]
    );

    // const incrementFather = () => {
    //     setCounter(counter + 1);
    // };

    console.log(counter);

    return (
        <>
            <h1>useCallback hook: {counter}</h1>
            <hr />

            <ShowIncrement increment={incrementFather} />
        </>
    );
};
