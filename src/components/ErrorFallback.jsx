export default function ErrorFallback({ error, resetError }) {
    return (
        <div role="alert" style={{ padding: "1rem", color: "red" }}>
            <p>Something went wrong:</p>
            <pre>{error.message}</pre>
            <button onClick={resetError}>Go back</button>
        </div>
    );
}
