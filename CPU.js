export function CPU(score, wetten, narrativ, neutral) {
    return {
        holo: score + wetten + narrativ + neutral,
        status: score > wetten ? "aktiv" : "passiv"
    };
}
