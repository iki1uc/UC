export function RAM(sys, tem, iki) {
    return {
        score: sys.value,
        wetten: tem.time,
        slide: (sys.value + tem.time) / 2
    };
}
