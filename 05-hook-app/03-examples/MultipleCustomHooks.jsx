import React from "react";
import { useFetch, useCounter } from "../hooks";
import { LoadingQuote, Quote } from "./";

export const MultipleCustomHooks = () => {
    const { counter, increment } = useCounter(1);
    const { data, isLoading, hasError } = useFetch(
        `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`
    );
    const { author, quote } = !!data && data[0];

    // si la data !!data y && la primera de posicion de data es decir data[0]

    // if (isLoading === true) {
    //     return <h1>Cargando...</h1>;
    // }

    return (
        <>
            <h1>BreakingBad Quotes</h1>
            <hr />
            {isLoading ? (
                <LoadingQuote />
            ) : (
                <Quote author={author} quote={quote} />
            )}
            <button
                className="btn btn-primary"
                disabled={isLoading}
                onClick={() => increment()}
            >
                Next quote
            </button>
            Github
        </>
    );
};
// pregunta de porque el loading sigue activo

// new API https://breakingbadquotes.xyz/

//https://api.breakingbadquotes.xyz/v1/quotes/5

// {isLoading ? (
//     <div className="alert alert-info text-center">Loading...</div>
// ) : (
//     <blockquote className="blockquote text-end">
//         <p className="mb-1">{quote}</p>
//         <footer className="blockquote-footer mt-1">{author}</footer>
//     </blockquote>
// )}

{
    /* <LoadingQuote />
<Quote/> */
}
