// AXES.js – AIR / AIV / XI / IX / X4

export function AXES(holo, ftg, aie) {

    return {
        AIR: holo.hologramm * 1.1,     // CACHE
        AIV: ftg.movement * 1.2,       // VISIO
        XI:  ftg.energy * 1.3,         // CHDSK
        IX:  aie.AIE * 1.4,            // GATE
        X4:  aie.AIE * 1.5             // Quad-Booster
    };
}
