import { UC_KERNEL } from "./UC.kernel.js";
import { RESPO_INVERT } from "./RESPO.invert.js";
import { RESPO_EVO } from "./RESPO.evo.js";
import { TMP } from "./TMP.respo.js"; // du musst TMP als Modul exportieren

export function UC_RESPO(sys, tem, iki, nuller, ftg, qi) {

    // 1. UC erzeugen
    const uc = UC_KERNEL(sys, tem, iki);

    // 2. RESPO invertieren
    const inv = RESPO_INVERT({ SYS: sys, TEM: tem, IKI: iki });

    // 3. neue RESPO erzeugen
    const evo = RESPO_EVO(inv.UC);

    // 4. 6D Achsen verbinden
    const axis = ["ROOT", "ACHSE", "TMP", "LAGE", "laTER", "ORT"];

    // 5. Hologrammwert erzeugen
    const holo = {
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

    return holo;
}
