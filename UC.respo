export function UC_RESPO(sys, tem, iki, nuller, ftg, qi) {
    const uc = UC_KERNEL(sys, tem, iki);
    const inv = RESPO_INVERT({ SYS: sys, TEM: tem, IKI: iki });
    const evo = RESPO_EVO(inv.UC);

    const axis = ["ROOT", "ACHSE", "TMP", "LAGE", "laTER", "ORT"];

    return {
        score: evo.score,
        wetten: evo.wetten,
        slide: (evo.score + evo.wetten) / 2,
        qi: qi,
        iqq: qi * 2,
        mind: qi * evo.evo,
        neutral: nuller,
        ftg: ftg,
        axis: axis,
        rotation: "360°",
        dimension: "6D"
    };
}
