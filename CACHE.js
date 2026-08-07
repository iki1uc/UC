export function CACHE(narrativ) {
    return {
        check: narrativ > 2 ? "OK" : "WARN",
        level: narrativ * 10
    };
}
