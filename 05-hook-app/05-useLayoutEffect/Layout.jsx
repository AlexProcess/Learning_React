import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "../03-examples";

export const Layout = () => {
    const { counter, increment } = useCounter(1);
    const { data, isLoading, hasError } = useFetch(
        `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`
    );
    const { author, quote } = !!data && data[0];

    // si la data !!data y && la primera de posicion de data es decir data[0]
    console.log(isLoading);
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
        </>
    );
};
