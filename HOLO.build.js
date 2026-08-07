// HOLO.build – 6e-Hologramm-Bildung
// Kompatibel mit: UC_RESPO, FTG.js, AIE.js, TMP.respo.js

import { UC_RESPO } from "./UC.respo.js";
import { FTG } from "./FTG.js";
import { AIE } from "./AIE.js";
import { TMP } from "./TMP.respo.js";

export function HOLO_BUILD(sys, tem, iki, narrativ, neutral) {

    // 1. UC-RESPO erzeugen
    const uc = UC_RESPO(sys, tem, iki, neutral, null, narrativ);

    // 2. FTG-Vektor erzeugen
    const ftg = FTG(sys, tem, iki, neutral, narrativ);

    // 3. AIE erzeugen (Aware / Interpret / Execute)
    const aie = AIE(narrativ, uc.mind, uc.score, uc.wetten);

    // 4. 6e-Hologrammwert berechnen
    const sixE = {
        score: uc.score,
        wetten: uc.wetten,
        narrativ: narrativ,
        neutral: neutral,
        vektor: ftg.movement,
        hologramm: uc.score + uc.wetten + narrativ + ftg.movement + neutral,
        dimension: "6e"
    };

    // 5. Farbstatus (grün / gelb / rot)
    let status = "green";
    if (sixE.hologramm < 20) status = "red";
    else if (sixE.hologramm < 50) status = "yellow";

    // 6. 360°-Achsen
    const axis360 = ["ROOT", "ACHSE", "TMP", "LAGE", "laTER", "ORT"];

    // 7. TMP-Update
    TMP.last = {
        score: uc.score,
        wetten: uc.wetten,
        qi: narrativ,
        axis: TMP.axis,
        neutral: neutral
    };

    // 8. Rückgabe
    return {
        uc,
        ftg,
        aie,
        sixE,
        status,
        axis360,
        rotation: "360°",
        dimension: "6D"
    };
}

