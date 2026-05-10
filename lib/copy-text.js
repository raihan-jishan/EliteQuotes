export const copyQuote = async (text) => {
    try {
        await navigator.clipboard.writeText(text);
    } catch (err) {
        console.error("Copied failed", err);
        
    }
}