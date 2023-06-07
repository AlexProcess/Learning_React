import React from "react";
import { useFetch } from "../hooks/useFetch";

export const MultipleCustomHooks = () => {
    const { data, isLoading, hasError } = useFetch(
        `https://api.breakingbadquotes.xyz/v1/quotes/5`
    );

    const { author, quote } = !!data && data[0];
    // si la data !!data y && la primera de posicion de data es decir data[0]

    console.log(data);

    // if (isLoading === true) {
    //     return <h1>Cargando...</h1>;
    // }

    return (
        <>
            <h1>BreakingBad Quotes</h1>
            <hr />

            {isLoading ? (
                <div className="alert alert-info text-center">Loading</div>
            ) : (
                <blockquote className="blockquote text-end">
                    <p className="mb-1">{quote}</p>
                    <footer className="blockquote-footer mt-1">{author}</footer>
                </blockquote>
            )}
            <button className="btn btn-primary">Next quote</button>
        </>
    );
};

// new API https://breakingbadquotes.xyz/

//https://api.breakingbadquotes.xyz/v1/quotes/5
