export const Quote = ({ author, quote }) => {
    return (
        <>
            <div className="alert alert-info text-center">Loading...</div>
            <blockquote className="blockquote text-end">
                <p className="mb-1">{quote}</p>
                <footer className="blockquote-footer mt-1">{author}</footer>
            </blockquote>
        </>
    );
};
