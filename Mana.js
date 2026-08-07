export function MANA(AU, RA, minTH) {
    return {
        AU,
        RA,
        minTH,
        level: AU + RA + minTH
    };
}
